CREATE TABLE Student (
    id INT AUTO_INCREMENT NOT NULL,
    fname VARCHAR(16),
    lname VARCHAR(16),
    age INT(3),
    gender VARCHAR(5),
    email_address VARCHAR(50),
    contact_number VARCHAR(15),
    PRIMARY KEY (id)
);

create table Subject (
	id int auto_increment not null primary key,
    name varchar(16)
);

 create table Semester(
	id int auto_increment not null primary key,
    semester int not null,
    subject_id int,
    foreign key (subject_id) references Subject(id)
 );

