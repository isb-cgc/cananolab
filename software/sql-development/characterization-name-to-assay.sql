WITH
    a1 as (SELECT discriminator, "no" as is_other, assay_type from characterization where discriminator != "OtherCharacterization"),
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
    c1 as (SELECT REPLACE(other_char_assay_category, " characterization", "") as category, other_char_name as char_name,
       "yes" as is_other, assay_type, COUNT(*) as count from characterization
        where discriminator = "OtherCharacterization" group by category, char_name, assay_type order by category, char_name),
    d1 as (SELECT b1.parent as category, a1.discriminator as char_name, is_other, assay_type,
       COUNT(*) as count from a1 join b1 on b1.discriminator = a1.discriminator group by category, char_name, assay_type)
    SELECT * from c1 UNION ALL SELECT * from d1 order by category, char_name, assay_type;
