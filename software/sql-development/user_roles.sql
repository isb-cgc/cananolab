


select u.username, u.first_name, u.last_name, a.authority
from users as u join authorities as a on u.username = a.username
where u.enabled = 1;