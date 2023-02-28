create table Person2(
	personId int primary key,
    lastName varchar(16),
    firstName varchar(16)
);

create table Address(
	addressId int primary key,
    personID int,
    city varchar(16),
    state varchar(16)
);


insert into Person2 (personId, lastname, firstName) values
('1', 'Wang', 'Allen'),
('2', 'Alice', 'Bob');

insert into Address(addressId, personID, city, state) values
(1, 2, 'New York City', 'New York'),
(2, 3, 'Leetcode', 'California');


select Person2.firstName, Person2.lastname, Address.city, Address.state from Person2 left join Address on Person2.personId = Address.personID;