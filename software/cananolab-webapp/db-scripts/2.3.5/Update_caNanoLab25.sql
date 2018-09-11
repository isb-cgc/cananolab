
/*CANANOLAB-541*/
update other_nanomaterial_entity
set type = 'polymer' where type = 'Poly Lactic-co- Glycolic acid';


update other_nanomaterial_entity
set type = 'silica' where type = 'Silica';


/*CANANOLAB-542*/
update nano_function
set other_function_type = NULL
where other_function_type in ('Adjuvant','Drug Carrier', 'Linker','other');

/*CANANOLAB-543*/
delete from common_lookup
where 
name = 'size'
and
value in 
("Diameter","Diameter - SEM", "Diameter - TEM","gel filtration chromatography","gel permeation chromatography");


/*CANANOLAB-545*/
update characterization
set assay_type = 'morphology'
where assay_type = 'Morphology';

update common_lookup
set value = 'morphology'
where value = 'Morphology';

update `characterization`
set assay_type = 'physico-chemical'
where assay_type = 'encapsulation efficiency';

update common_lookup
set value = 'physico-chemical'
where value = 'encapsulation efficiency' 
	and attribute = 'otherAssayType';

update `characterization`
set assay_type = 'size'
where assay_type = 'Transmission Electron Microscopy';

update common_lookup
set value = 'size'
where value = 'Transmission Electron Microscopy' 
	and attribute = 'otherAssayType';
	
/*CANANOLAB-546*/
update technique
set type = 'spectrophotometry'
where type = 'microplate reader';

update technique
set type = 'imaging'
where type = 'IVIS Lumina LT in Vivo Imaging System';

update technique
set type = 'gas sorption'
where type = 'surface area';
	
/*CANANOLAB-547*/
Delete from common_lookup where value = 'cell exxpansion' ;
Delete from common_lookup where value = 'study description' ;
