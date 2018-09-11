
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
	
update common_lookup
set value = 'heating/freezing'
 where value = 'hearing/freezing';
	
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

/*CANANOLAB-549*/
update publication
set category = 'peer review article'
where category = 'Article';


/*CANANOLAB-544*/
delete from common_lookup
where name = 'other_pc' 
and value = 'absorbance spectrophotometry';

update characterization
set assay_type = 'acoustic backscatter'
where assay_type = 'acoustic microscopy';

update common_lookup 
set value = 'acoustic backscatter'
where name = 'other_pc' 
and value = 'acoustic microscopy';

update characterization
set assay_type = 'magnetometry'
where assay_type = 'electron spin resonance spectroscopy';

update common_lookup 
set value = 'magnetometry'
where name = 'other_pc' 
and value = 'electron spin resonance spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'fluorescence spectrophotometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'fluorescence spectrophotometry';

update characterization
set assay_type = 'surface chemistry'
where assay_type = 'Fourier transform infrared spectroscopy';

update common_lookup 
set value = 'surface chemistry'
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'Fourier transform infrared spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'Chemical Analysis';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'FT-IR spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'FT-IR spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'FTIR spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'FTIR spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'gel electrophoresis';

update characterization
set assay_type = 'chemical analysis'
where characterization_pk_id in ('15499597', '15499598');

update characterization
set assay_type = 'protein content'
where characterization_pk_id in ('15499358', '15499337','15499336');

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'NMR spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'NMR spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'nuclear magnetic resonance';

update characterization
set assay_type = 'photoacoustic sensing'
where assay_type = 'photoacoustic spectroscopy';

update common_lookup 
set value = 'photoacoustic sensing'
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'photoacoustic spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'photoluminescence spectrophotometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'photoluminescence spectrophotometry';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'photoluminescence spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'photoluminescence spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'Raman spectrophotometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'Raman spectrophotometry';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'Raman spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'Raman spectroscopy';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'uv-vis absorbance spectrometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis absorbance spectrometry';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'uv-vis absorbance spectrophotometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis absorbance spectrophotometry';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'uv-vis absorbance spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis absorbance spectroscopy';

update characterization
set assay_type = 'stability'
where assay_type = 'uv-vis absorption spectrometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis absorption spectrometry';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'uv-vis spectrophotometry';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis spectrophotometry';

update characterization
set assay_Type = 'stability'
where characterization_pk_id = '15499588';

update characterization
set assay_Type = 'chemical analysis'
where characterization_pk_id in ( '15499577','15499578','15499585','15499587');

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis absorption spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis spectrophotometry';

update characterization
set assay_type = 'chemical analysis'
where assay_type = 'uv-vis spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'uv-vis spectroscopy';

update characterization
set assay_type = 'elemental composition'
where assay_type = 'wavelength dispersive spectroscopy';

delete from common_lookup
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'wavelength dispersive spectroscopy';

update characterization
set assay_type = 'matter structure'
where assay_type = 'X-ray absorption';

update common_lookup 
set value = 'matter structure'
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'X-ray absorption';

update characterization
set assay_type = 'crystal structure'
where assay_type = 'X-Ray Diffraction';

update common_lookup 
set value = 'crystal structure'
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'X-Ray Diffraction';

update characterization
set assay_type = 'surface'
where assay_type = 'X-Ray Photoelectron Spectroscopy';

update common_lookup 
set value = 'surface'
where name = 'other_pc' 
and attribute = 'otherAssayType'
and value = 'X-Ray Photoelectron Spectroscopy';

delete from common_lookup where
common_lookup_pk_id = '15401228';

delete from common_lookup where
common_lookup_pk_id = '28508258';

delete from common_lookup where
common_lookup_pk_id = '29687920';

delete from common_lookup where
common_lookup_pk_id = '29687854';

delete from common_lookup where
common_lookup_pk_id = '32505873';

delete from common_lookup where
common_lookup_pk_id = '15401125';

delete from common_lookup where
common_lookup_pk_id = '71532552';

delete from common_lookup where
common_lookup_pk_id = '28508184';

delete from common_lookup where
common_lookup_pk_id = '29687880';
