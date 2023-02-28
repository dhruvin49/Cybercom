CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    fname VARCHAR(256),
    lname VARCHAR(256),
    age INT(2),
    gender VARCHAR(8),
    email VARCHAR(24),
    contactno INT(10),
    PRIMARY KEY (id)
);

create table leave_information(
id int auto_increment,
emp_id int,
leave_name varchar(256) not null,
leave_descp varchar(256) not null,
leave_status varchar(16),
primary key (id),
foreign key (emp_id) references employees(id)
)