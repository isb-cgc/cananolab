# GROUP_CONCAT
SELECT person_id,
       GROUP_CONCAT(hobbies SEPARATOR ', ')
FROM peoples_hobbies
GROUP BY person_id;

#---------
#FULL OUTER JOIN SYNTAX FOR MYSQL:

SELECT
    p.publication_pk_id as pp,
    s.publication_pk_id as sp,
    s.sample_pk_id as ss
FROM sample_publication as s
         LEFT OUTER JOIN publication AS p  ON s.publication_pk_id = p.publication_pk_id
UNION
SELECT
    p.publication_pk_id as pp,
    s.publication_pk_id as sp,
    s.sample_pk_id as ss
FROM sample_publication as s
         RIGHT OUTER JOIN publication AS p ON s.publication_pk_id = p.publication_pk_id;
