WITH a1 as (SELECT REPLACE(other_char_assay_category, " characterization", "") as category, other_char_name as char_name, "yes" as type, COUNT(*) as count, MAX(sample_pk_id) as example_sample from characterization where discriminator = "OtherCharacterization" group by other_char_assay_category, other_char_name),
    b1 as (SELECT "Size" as discriminator, "physico-chemical" as parent
UNION ALL SELECT "Surface", "physico-chemical"
UNION ALL SELECT "Cytotoxicity", "in vitro"
UNION ALL SELECT "MolecularWeight", "physico-chemical"
UNION ALL SELECT "Shape", "physico-chemical"
UNION ALL SELECT "OxidativeStress", "in vitro"
UNION ALL SELECT "Solubility", "physico-chemical"
UNION ALL SELECT "Purity", "physico-chemical"
UNION ALL SELECT "Targeting", "in vitro"
UNION ALL SELECT "ImmuneCellFunction", "in vitro"
UNION ALL SELECT "Relaxivity", "physico-chemical"
UNION ALL SELECT "BloodContact", "in vitro"
UNION ALL SELECT "PhysicalState", "physico-chemical"
UNION ALL SELECT "Transfection", "in vitro"
UNION ALL SELECT "Pharmacokinetics", "in vivo"
UNION ALL SELECT "Toxicology", "in vivo"
UNION ALL SELECT "Sterility", "in vitro"
UNION ALL SELECT "EnzymeInduction", "in vitro"
UNION ALL SELECT "MetabolicStability", "in vitro"
    ),
    c1 as (SELECT discriminator, COUNT(*) as count, MAX(sample_pk_id) as example_sample from characterization where discriminator != "OtherCharacterization" group by discriminator),
    d1 as (SELECT b1.parent as category, c1.discriminator as char_name, "no" as type, c1.count, c1.example_sample from c1 join b1 on b1.discriminator = c1.discriminator),
    e1 as (SELECT * from a1 UNION DISTINCT SELECT * from d1)
SELECT e1.category, e1.char_name, e1.type as is_other, e1.count, s.sample_name as example_sample_name FROM e1 JOIN sample as s on e1.example_sample = s.sample_pk_id order by category, char_name;
