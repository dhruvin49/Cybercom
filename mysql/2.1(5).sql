create table Customers(
 id int auto_increment primary key not null,
 name varchar(24)
);

insert into Customers (name) values ('Joe'),
('Henry'),
('Sam'),
('Max');

create table Orders(
 id int auto_increment primary key not null,
 customerId int not null,
 foreign key (customerId) references Customers(id)
);

insert into Orders (customerId) value ('3'), ('1');

select customers.name as Customers from Customers left join Orders on customers.id = Orders.customerId where Orders.id is null;

