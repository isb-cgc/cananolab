# A publication is a subclass of file, so we have a key to join two tables
# Some pubs are tied to samples, and others are not.
SELECT
    SUBSTRING(f.file_uri, 1, 25) as uri_start,
    SUBSTRING(f.file_name, 1, 25) as filename_start,
    "PUBLICATION" as route,
    SUBSTRING(f.title, 1, 25) as title_start,
    GROUP_CONCAT(
    CASE WHEN s.sample_name IS NULL
        THEN ""
    ELSE
        s.sample_name
    END
    SEPARATOR ', ') as sample_names
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
GROUP BY uri_start, filename_start, route, title_start
order by title_start;


SELECT
    SUBSTRING(f.file_uri, 1, 25) as uri_start,
    SUBSTRING(f.file_name, 1, 25) as filename_start,
    p.pubmed_id,
    "PUBLICATION" as route,
    SUBSTRING(f.title, 1, 25) as title_start,
    CASE WHEN s.sample_name IS NULL
      THEN ""
      ELSE s.sample_name
    END as sample_name
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
order by title_start;


