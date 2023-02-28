create table customers(
 id int auto_increment primary key,
 name text(24),
 email text(32),
 created_at timestamp
);

insert into customers (name, email, created_at) values
('John Smith', 'johnsmith@gmail.com', '2022-01-01 10:00:00'),
('Jane Doe', 'janedoe@yahoo.com', '2022-01-02 11:00:00'),
('Bob Johnson', 'bobjohnson@hotmail.com', '2022-01-03 12:00:00'),
('Sarah Lee', 'sarahlee@gmail.com', '2022-01-04 13:00:00'),
('David Kim', 'davidkim@yahoo.com', '2022-01-05 14:00:00');

select name from customers where email like ('%@gmail.com');

select name from customers order by created_at asc limit 1 ;

select name, email from customers where created_at >= '2022-01-03 00:00:00';

update customers set email = 'davidkim@gmail.com' where id = '5';

delete from customers where id = '2';

select count(name) from customers;
