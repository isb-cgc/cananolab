
#
# Ticket #276 reports multiple READ WRITE DELETE entries for a sample. Turns out that
# the acl_object_identity appears to have multiple copies of the same permission
#

WITH a1 as
    (select acl_object_identity, COUNT(*) as num from acl_entry group by acl_object_identity
    order by num desc)
SELECT num, COUNT(*) as num_of_num from a1 group by num order by num desc;



select acl_object_identity, sid, mask, granting, audit_success, audit_failure, COUNT(*) as num
  from acl_entry where acl_object_identity = 15261
  GROUP BY acl_object_identity, sid, mask, granting, audit_success, audit_failure
  order by sid, mask;


# Completely normal: 948 IDs:
WITH a1 as
    (select acl_object_identity, sid, mask, granting, audit_success, audit_failure, COUNT(*) as num
  from acl_entry
  GROUP BY acl_object_identity, sid, mask, granting, audit_success, audit_failure)
  select DISTINCT acl_object_identity from a1 where num = 1
  order by acl_object_identity;

# At least one duplication: 4471 IDs:
WITH a1 as
    (select acl_object_identity, sid, mask, granting, audit_success, audit_failure, COUNT(*) as num
  from acl_entry
  GROUP BY acl_object_identity, sid, mask, granting, audit_success, audit_failure)
select DISTINCT acl_object_identity from a1 where num != 1
order by acl_object_identity;

# non-pub duplications: 4284 IDs:
WITH a1 as
    (select acl_object_identity, sid, mask, granting, audit_success, audit_failure, COUNT(*) as num
  from acl_entry
  GROUP BY acl_object_identity, sid, mask, granting, audit_success, audit_failure)
select DISTINCT acl_object_identity from a1 where sid != 31 AND num != 1
order by acl_object_identity;

WITH pubs as (select f.created_by, f.created_date,
       p.publication_pk_id, p.category, p.publication_status, p.pubmed_id,  p.digital_object_id, p.year
       from file as f join publication as p on f.file_pk_id = p.publication_pk_id),
a1 as (select acl_object_identity, COUNT(*) as num from acl_entry
      GROUP BY acl_object_identity, sid, mask, granting, audit_success, audit_failure),
mul as (select DISTINCT acl_object_identity from a1 where num != 1),
ppub AS (select p.* from pubs as p
         join acl_object_identity as a on p.publication_pk_id = a.object_id_identity
         join mul as m on a.id = m.acl_object_identity)
select * from ppub;





SELECT * from mul;

SELECT pubs.* from pubs join mul on mul.acl_object_identity = pubs.publication_pk_id;
