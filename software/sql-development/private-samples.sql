
#
# Ticket #272 reports public samples with private publications. This query generates the list.
#

WITH ppub AS (select DISTINCT p.publication_pk_id from publication as p
             join acl_object_identity as a on p.publication_pk_id = a.object_id_identity
             join acl_entry as e on a.id = e.acl_object_identity
             where e.sid = 31),
    spub AS (select DISTINCT s.sample_pk_id from sample as s
             join acl_object_identity as a on s.sample_pk_id = a.object_id_identity
             join acl_entry as e on a.id = e.acl_object_identity
             where e.sid = 31),
    ppriv as (SELECT u.publication_pk_id, u.pubmed_id, u.digital_object_id, u.publication_status, u.category from publication as u
              LEFT JOIN ppub on ppub.publication_pk_id = u.publication_pk_id
              WHERE ppub.publication_pk_id IS NULL),
    spriv as (SELECT m.sample_pk_id from sample as m
              LEFT JOIN spub on spub.sample_pk_id = m.sample_pk_id
              WHERE spub.sample_pk_id IS NULL),
    allsamp_ppriv as (SELECT DISTINCT sp.sample_pk_id, ppriv.* from ppriv
                      JOIN sample_publication as sp on sp.publication_pk_id = ppriv.publication_pk_id
                      WHERE sp.sample_pk_id IS NOT NULL),
    spub_ppriv as (select aspp.* from allsamp_ppriv as aspp join spub as s on s.sample_pk_id = aspp.sample_pk_id
                    WHERE s.sample_pk_id IS NOT NULL)
    SELECT s.sample_name, s.created_date, s.created_by, spp.* from spub_ppriv as spp
           join sample as s on s.sample_pk_id = spp.sample_pk_id;
