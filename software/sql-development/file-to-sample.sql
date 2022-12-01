SELECT
    f.file_name,
    f.file_pk_id,
    "FINDING" as route,
    s.sample_name
FROM sample as s
    JOIN characterization as c
        ON s.sample_pk_id = c.sample_pk_id
    JOIN finding AS n
        ON n.characterization_pk_id = c.characterization_pk_id
    JOIN finding_file AS d
        ON n.finding_pk_id = d.finding_pk_id
    JOIN file AS f
        ON f.file_pk_id = d.file_pk_id
UNION DISTINCT
SELECT
    f.file_name,
    f.file_pk_id,
    "COMPOSITION" as route,
    s.sample_name
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN composition_file AS d
              ON c.composition_pk_id = d.composition_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
UNION DISTINCT
SELECT
    f.file_name,
    f.file_pk_id,
    "NANOMATERIAL" as route,
    s.sample_name
FROM sample as s
     JOIN composition as c
          ON s.sample_pk_id = c.sample_pk_id
     JOIN nanomaterial_entity AS n
          ON n.composition_pk_id = c.composition_pk_id
     JOIN nanomaterial_entity_file AS d
          ON n.nanomaterial_entity_pk_id = d.nanomaterial_entity_pk_id
     JOIN file AS f
          ON f.file_pk_id = d.file_pk_id
UNION DISTINCT
SELECT
    f.file_name,
    f.file_pk_id,
    "KEYWORD" as route,
    s.sample_name
FROM sample as s
         JOIN keyword_sample AS n
              ON n.sample_pk_id = s.sample_pk_id
         JOIN keyword_file AS d
              ON n.keyword_pk_id = d.keyword_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_pk_id,
    "ASSOCIATION" as route,
    s.sample_name
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN chemical_association AS a
              ON a.composition_pk_id = c.composition_pk_id
         JOIN chemical_association_file AS d
              ON a.chemical_association_pk_id = d.chemical_association_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_pk_id,
    "FUNCTION" as route,
    s.sample_name
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN funtionalizing_entity AS a
              ON a.composition_pk_id = c.composition_pk_id
         JOIN funtionalizing_entity_file AS d
              ON a.funtionalizing_entity_file = d.funtionalizing_entity_file
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
order by sample_name LIMIT 10;

