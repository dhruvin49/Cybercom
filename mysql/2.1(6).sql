create table random(
 id int not null,
 email varchar(16)
);

select * from random;
create index email_index on random (email);