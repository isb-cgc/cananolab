#!/usr/bin/env python

import sys
import re
import os
import array
import inspect
from datetime import date

'''
e.g. convert_hibernate_method.py Sample 'findSampleById(String sampleId)' software/cananolab-webapp/src/main/java/gov/nih/nci/cananolab/service/sample/helper/SampleServiceHelper.java

terms:
 stm - short-term memory
 fn - file name
 fpn - full path name
 rpn - relative path name
 dne - does not exist
'''

crit_lines= [] # list of lines e.g. "crit.setFetchMode(..." for the method to be converted
re_stm= {} # short-term memory for regexes
args= ' '.join(sys.argv[1:])

def die(msg):
    print(f"{msg}")
    exit()

def parse_crit_lines_in_method(klasse,sig,fpn):
    '''given a class name, method signature and relative pathname of a java file, returns 
    a list of "crit_lines" e.g. crit.setFetchMode(... within that method. For example: 
    parse_crit_lines_in_method("Sample","findSampleById(String sampleId)", "software/cananolab-webapp/src/main/java/gov/nih/nci/cananolab/service/sample/helper/SampleServiceHelper.java" will return 
    '''
    global re_stm
    crit_lines=[]
    if not os.path.isfile(fpn): die(f"fatal! fpn dne: {fpn}")
    def pairs():
        pairs= []
        h= {}
        for crit_line in crit_lines:
            m= re_stm["fixed up crit line"].match(crit_line)
            if not m: die(f"fixed up crit line re failed for crit_line {crit_line} ")
            pairs.append(m.group(1))
            h[m.group(1)]= crit_line
        return h #pairs, h

    orig_sig= sig
    sig= re.escape(sig)
    re_stm["start re"]= re.compile(f".*public\s+{klasse}\s+{sig}\s.*")
    re_stm["crit line"]= re.compile("^\s*crit.setFetchMode.*")
    re_stm["fixed up crit line"]= re.compile("^\s*crit.setFetchMode\(\"(.*)\"\s*,.*")
    re_stm["stop parsing re"]= re.compile("^\s*public\s+([A-z0-9_]).*")
    state="skipping"
    crit_line= []
    for ln in open(fpn):
        ln= ln.rstrip()
        rc= re_stm["start re"].match(ln)
        if rc and state=="skipping":
            state="parsing"
            continue
        if "parsing" in state:
            if re_stm["stop parsing re"].match(ln):
                # now just collect all table pairs
                return True, pairs()
            m= re_stm["crit line"].match(ln)
            if m:
                if re.compile(".*;\s*$").match(ln):
                    crit_lines.append( ln.strip() )
                    continue
                state="parsing crit line"
                crit_line.append(ln.strip())
                continue
            if state=="parsing crit line":
                if re.compile(".*;\s*$").match(ln):
                    crit_line.append(ln.strip())
                    crit_line= ''.join(crit_line)
                    crit_lines.append( crit_line )
                    crit_line= []
                    state="parsing"
                    continue
                crit_line.append(ln.strip())
                continue
    if state=="skipping": die(f"fatal! never saw a method: {orig_sig} that returns class {klasse}")
    return True, pairs()

h={}
stm={}

# read list of java files into hash
bean_exp= re.compile(r'.*Bean\.')
for ln in open("lof_java"):
    ln= ln.rstrip()
    if bean_exp.match(ln): continue
    rc= re.match(r'.*/(.*).java',ln)
    if rc:
        klasse= rc.group(1)
        if ln in h.keys(): die("dupe key!")
        h[ln]= klasse
    else:
        die(f":( {ln}")

def klasseName(klasse,parent):
    global stm
    if klasse in stm.keys():
        return f"{parent}{klasse}"
    stm[klasse]=0
    return klasse

def lookup(klasse):
    global h
    for k,v in h.items():
        if v==klasse: return k,v,True,False
    return None, None, False, False

def hof_fn_with_getId(h):
    '''get a dictionary of file names and their id getters (which is not always getId() fyi)'''
    getId_exp= re.compile(r'^\s*public\s+Long getId\(\)')
    getPkId_exp= re.compile(r'^\s*public\s+Long get(.*)PkId\(\)')
    d={}
    for k in h.keys():
        if bean_exp.match(k): continue
        try:
            for ln in open(k):
                rc= getId_exp.match(ln)
                if rc: 
                    d[k]=f"getId()"
                    continue
                rc= getPkId_exp.match(ln)
                if rc: 
                    d[k]=f"get{rc.group(1)}PkId()"
                    continue
        except:
            pass
    return d

fn_with_getId= hof_fn_with_getId(h)


def short_logger_debug(indent,parent,child,rest,code_generated_fp):
    '''shortens logger.debug lines like "logger.debug("myOrganization.myOrganizationPointOfContact.getId()==..."
    to: "logger.debug("myOrganizationPointOfContact.getId()==..."
    '''
    if child.startswith(parent):
        print(f"{indent}    logger.debug(\"{child}{rest}",file=code_generated_fp)
    else:
        print(f"{indent}    logger.debug(\"{parent}.{child}{rest}",file=code_generated_fp)

def doPrimary(code_generated_fp,visited,klasse,getter,parent,pn,indent,spaces):
    '''gens code of the form X = myPrimaryX'''
    myVisited= visited.copy()
    kn= klasseName(klasse,parent)
    print(f"{indent}{klasse} myPrimary{klasse}= my{parent}.{getter};",file=code_generated_fp)
    print(f"{indent}if(myPrimary{klasse}!=null) {{",file=code_generated_fp)
    print(f"{indent}    myString= myPrimary{klasse}.toString();",file=code_generated_fp)
    short_logger_debug(indent,f"my{pn}",f"myPrimary{klasse}",f".getId()==\" + myPrimary{klasse}.getId());",code_generated_fp)
    k,v,found,done= lookup(klasse)
    if not found: die(f"fatal! could not find source for klasse {klasse}!")
    if klasse in visited: print(f"{indent}// (myPrimary{klasse}) ",file=code_generated_fp)
    else: 
        myVisited.append(klasse)
        v= f"Primary{klasse}"
        parse(code_generated_fp,myVisited,k,v,v,spaces+4)
    print(f"{indent}}} // myPrimary{klasse}",file=code_generated_fp)

# public PointOfContact getPrimaryPointOfContact
def recognize(code_generated_fp,visited,ln,parent,pn,indent,spaces):
    '''add any special cases that need to be recognized/handled'''
    myVisited= visited.copy()
    rc= re.match(r'^\s*public\s+(.*)\s+getPrimary\1\(\)',ln)
    if not rc: return False
    klasse= rc.group(1)
    getter= f"getPrimary{klasse}()"
    doPrimary(code_generated_fp,myVisited,klasse,getter,parent,pn,indent,spaces)
    return True

def special_case(klasse):
    '''handle getters such as getClassnameACollection()'''
    match klasse[-1]:
        case 'A'|'B'|'C':
            letter=klasse[-1]
            klasse= klasse[:-1]
            return klasse,f"get{klasse}{letter}Collection()"
        case default:
            return klasse, f"get{klasse}Collection()"

def parse(code_generated_fp,visited,fn,parent,pn,spaces=0):
    ''' parse filename passed in, using parent and avoiding code already visited in the particular subtree'''
    myVisited= visited.copy()
    indent=""
    for x in range(spaces): indent+= " "
    print(f"{indent} // {parent} fn {fn}",file=code_generated_fp)

    ignore_exp= re.compile(r'^\s*public\s+' + f"{parent}" + r'\(')
    # public Long getId() {
    id_exp= re.compile(r'^\s*public\s+Long getId\(\)')
    if not os.path.isfile(fn): die(f"fatal! fn dne: {fn}")
    for ln in open(fn,"r"):
        if re.match(r'^\s*public\s+class\s+',ln): continue
        if re.match(r'^\s*public\s+void',ln): continue
        if re.match(r'^\s*public\s+String',ln): continue
        if re.match(r'^\s*public\s+Date',ln): continue
        if re.match(r'^\s*public\s+java.util.Date',ln): continue
        if re.match(r'^\s*public\s+boolean',ln): continue
        if re.match(r'^\s*public\s+int',ln): continue
        if re.match(r'^\s*public\s+Integer',ln): continue
        if re.match(r'^\s*public\s+Float',ln): continue
        if re.match(r'^\s*public\s+.*\s+(add|remove)File',ln): continue
        if re.match(r'^\s*public\s+.*\s+(add|remove)Purity',ln): continue
        if ignore_exp.match(ln): continue
	# skip lines with "public Long getId()"
        if id_exp.match(ln): continue
        if re.match(r'^\s*public\s+Long',ln): continue

        rc= re.match(r'^\s*public',ln)
        if rc:
            # Set<File> getFileCollection()
            rc= re.match(r'^\s*public\s+Set<(.*)>\s+(get.*\(\))',ln)
            if rc:
                child= rc.group(1)
                kn= klasseName(child,parent)
                print(f"{indent}Set<{child}> my{kn}Set= my{pn}.{rc.group(2)};",file=code_generated_fp)
                print(f"{indent}for({child} my{kn} : my{kn}Set) {{ ",file=code_generated_fp)
                print(f"{indent}    myString= my{kn}.toString();",file=code_generated_fp)
                k,v,found,done= lookup(child)
                # some source lacks any method that gets an Id at all
                if k in fn_with_getId:
                    id_getter= fn_with_getId[k]
                    short_logger_debug(indent,f"my{pn}",f"my{child}",f".{id_getter}==\" + my{kn}.{id_getter});",code_generated_fp)
                if child in visited: print(f"{indent}    // ({child})",file=code_generated_fp)
                else: 
                    myVisited.append(child)
                    parse(code_generated_fp,myVisited,k,v, kn, spaces+4)
                print(f"{indent}}} // {child}",file=code_generated_fp)
                print("",file=code_generated_fp)
            else:
                rc= re.match(r'^\s*public\s+(.*)\s+get(\1.*)\(',ln)
                if rc:
                    klasse= rc.group(1)
                    var_name= rc.group(2)
                    getter= "get"+rc.group(2)
                    kn= klasseName(klasse,parent)
                    print(f"{indent}{klasse} my{kn}= my{pn}.{getter}();",file=code_generated_fp)
                    print(f"{indent}if(my{kn}!=null) {{",file=code_generated_fp)
                    print(f"{indent}    myString= my{kn}.toString();",file=code_generated_fp)
                    short_logger_debug(indent,f"my{pn}",f"my{kn}",f".getId()==\" + my{kn}.getId());",code_generated_fp)
                    k,v,found,done= lookup(klasse)
                    if klasse in visited: print(f"{indent}    // ({klasse}) ",file=code_generated_fp)
                    else: 
                        myVisited.append(klasse)
                        parse(code_generated_fp,myVisited,k,v, kn, spaces+4)
                    print(f"{indent}}}",file=code_generated_fp)
                else:
                    rc= re.match(r'^\s*public\s+Collection<(.*)>\s+(get.*\(\))',ln)
                    if rc:
                        child= rc.group(1)
                        kn= klasseName(child,parent)
                        print(f"{indent}Collection<{child}> my{kn}Collection= my{pn}.{rc.group(2)};",file=code_generated_fp)
                        print(f"{indent}for({child} my{kn}:my{kn}Collection) {{ ",file=code_generated_fp)
                        print(f"{indent}    myString= my{kn}.toString();",file=code_generated_fp)
                        short_logger_debug(indent,f"my{pn}",f"my{kn}",f".getId()==\" + my{kn}.getId());",code_generated_fp)
                        k,v,found,done= lookup(child)
                        if child in visited: print(f"{indent}    // ({child}) ",file=code_generated_fp)
                        else: 
                            myVisited.append(child)
                            parse(code_generated_fp,myVisited,k,v, kn, spaces+4)
                        print(f"{indent}}} // {child}",file=code_generated_fp)
                        print("",file=code_generated_fp)
                    else:
                        # non-std getter for SynthesisPurity and PurityColumnHeader
                        rc1= re.match(r'^\s*public\s+(SynthesisPurity)\s+(getPurity)\(\)',ln)
                        rc2= re.match(r'^\s*public\s+(PurityColumnHeader)\s+(getColumnHeader)\(\)',ln)
                        if rc1: rc= rc1
                        else: rc=rc2
                        if rc: 
                            klasse= rc.group(1)
                            getter= rc.group(2)
                            kn= klasseName(klasse,parent)
                            k,v,found,done= lookup(klasse)
                            print(f"{indent}{klasse} my{kn}= my{pn}.{getter}();",file=code_generated_fp)
                            print(f"{indent}if(my{kn}!=null) {{",file=code_generated_fp)
                            print(f"{indent}    myString= my{kn}.toString();",file=code_generated_fp)
                            short_logger_debug(indent,f"my{pn}",f"my{kn}",f".getId()==\" + my{kn}.getId());",code_generated_fp)
                            if klasse in visited: print(f"{indent}// ({klasse}) ",file=code_generated_fp)
                            else:
                                myVisited.append(klasse)
                                parse(code_generated_fp,myVisited,k,v, kn, spaces+4)
                            print(f"{indent}}}",file=code_generated_fp)
                            continue

                        if recognize(code_generated_fp,visited,ln,parent,pn,indent,spaces): continue

                        # public Set getFileCollection()
                        rc= re.match(r'^\s*public\s+Set\s+get(.*)Collection\(\)',ln)
                        if not rc: die(f"bad parse error in {fn}=>{ln}")
                        klasse= rc.group(1)
                        kn= klasseName(klasse,parent)
                        klasse,getter= special_case(klasse)
                        k,v,found,done= lookup(klasse)
                        if not found: die(f"dne:{klasse} parse error in {fn}=>{ln}")
                        if klasse in visited: print(f"{indent}// ({klasse})",file=code_generated_fp)
                        else:
                            kn= klasseName(klasse,parent)
                            print(f"{indent}Set<{klasse}> my{kn}Set= my{pn}.{getter};",file=code_generated_fp)
                            print(f"{indent}for({klasse} my{kn}:my{kn}Set) {{ ",file=code_generated_fp)
                            print(f"{indent}    myString= my{kn}.toString();",file=code_generated_fp)
                            short_logger_debug(indent,f"my{parent}",f"my{kn}",f".getId()==\" + my{kn}.getId());",code_generated_fp)
                            myVisited.append(klasse)
                            parse(code_generated_fp,myVisited,k,v, kn, spaces+4)
                            print(f"{indent}}} // {klasse}",file=code_generated_fp)
                            print("",file=code_generated_fp)

# used for annotate
class_aliases= {}
class_aliases["primaryPointOfContact"]= "PointOfContact"
class_aliases["otherPointOfContactCollection"]= "PointOfContact"
class_aliases["nanomaterialEntityCollection"]= "NanomaterialEntity"
class_aliases["composingElementCollection"]= "composingElement"
class_aliases["functionalizingEntityCollection"]= "functionalizingEntity"
class_aliases["characterizationCollection"]= "characterization"

'''
annotate functions
during the last step, comments are added to the code
indicating where each crit_line was converted
this helps when reviewing the code to ensure all crit_lines were covered
'''

def annotate(parent,lno,ln,crit_lines):
    '''decides whether a particular line of code should have an annotation
    returns either None, False if it shouldn't, or
    a string containing 2 lines -- the annotation and the current line
    '''
    my_crit_lines= crit_lines.keys()
    for x in my_crit_lines:
        if '.' not in x:
            getter= f"{parent}.get{x}"
            if getter.lower() in ln.lower(): 
                rv= f"// {crit_lines[x]}\n{ln}"
                del crit_lines[x]
                return rv, True
            else: 
                if parent in class_aliases:
                    getter= f"{class_aliases[parent]}.get{x}"
                    if getter.lower() in ln.lower():
                        input(f"found parent in class_aliases & doing annotation; parent: {parent} getter: {getter}")
                        rv= f"// {crit_lines[x]}\n{ln}"
                        del crit_lines[x]
                        return rv, True
                continue
        a= x.split('.')
        parent2,method= a[-2:]
        getter= f"{parent2}.get{method}()"
        if getter.lower() in ln.lower(): 
            rv= f"// {crit_lines[x]}\n{ln}"
            del crit_lines[x]
            return rv, True
        if parent2 in class_aliases:
            getter= f"{class_aliases[parent2]}.get{method}"
            if getter.lower() in ln.lower():
                rv= f"// {crit_lines[x]}\n{ln}"
                del crit_lines[x]
                return rv, True
    return None, False

def code_comments(klasse):
    return f"""
    /* generated by {os.path.basename(__file__)} on {date.today().strftime("%Y.%d.%m")}
       code is commented with the following:
        1. comments such as "// crit.setFetchMode(..." to indicate code blocks that replaced specific crit.setFetchMode lines in original method
        2. file names used during parsing/code generation
            e.g. "// Sample fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Sample.java
        3. comments such as "// (PointOfContact)" to indicate nested classes ommitted from parsing to avoid infinite recursion
            note: as opposed to "// PointOfContact" which simply labels the end of an iteration over a collection of PointOfContact
    */ \n"""

def annotate_fn(klasse,fn):
    '''
    annotates the file name provided by:
    creating the signature and first part of a method that returns a TransactionInsertion, including executeInsideTransaction, the override, etc.,
    calling annotate() for each line in order to either modify it or not,
    then finish up by adding the last part of the method
    note: the resulting method will be named "code_generated_" plus the name of the method converted
    '''
    new_fn= f"{fn}.new"
    new_fp= open(new_fn,"w")
    # first part of method...
    new_fp.write(f"private TransactionInsertion<{klasse}> code_generated_get{klasse}TransactionInsertion() {{\n")
    new_fp.write(code_comments(klasse))
    new_fp.write(f"            TransactionInsertion<Sample> myTransactionInsertion = new TransactionInsertion<Sample>() {{\n")
    new_fp.write("            @Override\n")
    new_fp.write(f"            public boolean executeInsideTransaction({klasse} my{klasse}) {{\n")
    new_fp.write("            String myString= null;\n")
    with open(fn) as fp:
        for lno,ln in enumerate(fp):
            out,rc= annotate("sample",lno,ln,crit_lines)
            if rc: 
                print(out.rstrip(),file=new_fp)
                #input("kewel...")
            else: 
                print(ln.rstrip(),file=new_fp)

    # last part of method:
    new_fp.write("return true;\n")
    new_fp.write("}\n")
    new_fp.write("};\n")
    new_fp.write("return myTransactionInsertion;\n")
    new_fp.write("}\n")

    new_fp.close()


def instructions(klasse,sig,fpn,code_generated_fn):
    print(f"""file {code_generated_fn} created. now do the following:
    1. insert into {fpn}
    2. replace '{sig}' with something like the following:
        ...
        DetachedCriteria crit= DetachedCriteria.forClass({klasse}.class).add( Property.forName("id").eq({klasse.lower()}Id));
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        TransactionInsertion<{klasse}> myTransactionInsertion= code_generated_get{klasse}TransactionInsertion();
        my{klasse} = appService.queryAndProcess(crit, myTransactionInsertion);
        logger.debug("ran appService.queryAndProcess");
        return my{klasse};
    3. do a build to ensure no name conflicts or other errors
    4. (optional) verify annotations -- e.g. // crit.setFetchMode(...) -- are in the right place
    """)

klasse,sig,fpn= sys.argv[1], sys.argv[2], sys.argv[3]
stm[klasse]= 1 

rc,crit_lines= parse_crit_lines_in_method(klasse,sig,fpn)
if not rc: die("parse_crit_lines_in_method failed")

code_generated_fn= f"{klasse}.java.insert"
code_generated_fp= open(code_generated_fn,"w")

rc= re.match(r'.*/(.*).java',fpn)
if not rc: die(f"fpn does not match pattern {fpn}")
parent= rc.group(1)
k,v,found,done= lookup(klasse)
if not found: die(f"failed to lookup klasse {klasse}")
parse(code_generated_fp,[klasse],k,v,klasse)
code_generated_fp.close()

annotate_fn(klasse,code_generated_fn)
if len(crit_lines)==0:
    print(":) all crit_lines found")
else:
    print(f":( {len(crit_lines)} crit_lines not found:")
    for x in crit_lines: print(f"{x}")

instructions(klasse,sig,fpn,code_generated_fn)
