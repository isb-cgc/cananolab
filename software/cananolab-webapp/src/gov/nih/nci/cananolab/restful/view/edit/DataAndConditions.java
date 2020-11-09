package gov.nih.nci.cananolab.restful.view.edit;

import java.util.HashSet;
import java.util.Set;

public class DataAndConditions {

        String name = new String();
        HashSet<String> values = new HashSet<String>();

        public String getName(){
            return name;
        }

        public void setName(String newName){
            this.name = newName;
        }

        public Set<String> getValues() {
            return values;
        }

        public void setValues(HashSet<String> newValues){
            this.values = newValues;
        }

        public HashSet<String>  addValue(String value) {
            values.add(value);
            return this.values;
        }
}
