SELECT
    SUBSTRING(f.file_uri, 1, 25) as uri_start,
    f.file_pk_id,
    "PROTOCOL" as route,
    SUBSTRING(p.protocol_name, 1, 25) as proto_start
FROM protocol as p
         JOIN file as f
              ON f.file_pk_id = p.file_pk_id
WHERE f.is_uri_external = 0
order by protocol_name;