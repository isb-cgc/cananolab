SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "PROTOCOL" as route,
    p.protocol_name as name,
    "" as sample
FROM protocol as p
    JOIN file as f
        ON f.file_pk_id = p.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name, sample
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "PUBLICATION" as route,
    "" as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample
FROM sample as s
         JOIN sample_publication as j
              ON j.sample_pk_id = s.sample_pk_id
         RIGHT OUTER JOIN publication as p
              ON j.publication_pk_id = p.publication_pk_id
         JOIN file as f
              ON f.file_pk_id = p.publication_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "FINDING" as route,
    "" as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample
FROM sample as s
         JOIN characterization as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN finding AS n
              ON n.characterization_pk_id = c.characterization_pk_id
         JOIN finding_file AS d
              ON n.finding_pk_id = d.finding_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "COMPOSITION" as route,
    "" as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN composition_file AS d
              ON c.composition_pk_id = d.composition_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "NANOMATERIAL" as route,
    "" as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN nanomaterial_entity AS n
              ON n.composition_pk_id = c.composition_pk_id
         JOIN nanomaterial_entity_file AS d
              ON n.nanomaterial_entity_pk_id = d.nanomaterial_entity_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "KEYWORD" as route,
    k.name as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample

FROM sample as s
         JOIN keyword_sample AS n
              ON n.sample_pk_id = s.sample_pk_id
         JOIN keyword AS k
              ON n.keyword_pk_id = k.keyword_pk_id
         JOIN keyword_file AS d
              ON n.keyword_pk_id = d.keyword_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "ASSOCIATION" as route,
    "" as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN chemical_association AS a
              ON a.composition_pk_id = c.composition_pk_id
         JOIN chemical_association_file AS d
              ON a.chemical_association_pk_id = d.chemical_association_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
UNION DISTINCT
SELECT
    f.file_uri,
    f.file_name,
    f.title,
    "FUNCTION" as route,
    "" as name,
    GROUP_CONCAT(
            CASE WHEN s.sample_name IS NULL
                     THEN ""
                 ELSE
                     s.sample_name
                END
                SEPARATOR ', ') as sample
FROM sample as s
         JOIN composition as c
              ON s.sample_pk_id = c.sample_pk_id
         JOIN functionalizing_entity AS a
              ON a.composition_pk_id = c.composition_pk_id
         JOIN functionalizing_entity_file AS d
              ON a.functionalizing_entity_pk_id = d.functionalizing_entity_pk_id
         JOIN file AS f
              ON f.file_pk_id = d.file_pk_id
WHERE f.is_uri_external = 0
  AND f.file_uri IS NOT NULL
  AND NOT f.file_uri = ' '
GROUP BY file_uri, file_name, title, route, name
order by route, file_name;



