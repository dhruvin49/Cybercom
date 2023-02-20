create database studentdata;
create table College
(
collegeid int,
collegename varchar(256),
primary key(collegeid)
);

insert into College (collegeid,collegename)
value (1,"Charusat"), (2,"GEC_BHAVNAGAR"), (3,"DAIICT"), (4,"PPSU");

create table student
(
student_id int,
student_name varchar(256),
collegeid int,
primary key(student_id),
foreign key(collegeid) references College(collegeid)
);


insert into student
(student_id,student_name,collegeid)
value (101,"Manan",1), (103,"Dhruvin",3), (104,"Drashti",2), (111,"Ved",4), (112,"Yash",2);



