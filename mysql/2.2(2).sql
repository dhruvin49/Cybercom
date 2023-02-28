create table Courses(
	student varchar(8),
    class varchar(8),
    primary key (student, class)
);

insert into Courses values ('A', 'Math'),
('B', 'English'),
('C', 'Math'),
('D', 'Biology'),
('E', 'Math'),
('F', 'Computer'),
('G', 'Math'),
('H', 'Math'),
('I', 'Math');

select class from Courses group by class having count(student) >= 5 ;


