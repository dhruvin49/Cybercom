CREATE TABLE inventory (
 id INT PRIMARY KEY,
 name VARCHAR(255),
 quantity INT,
 price DECIMAL(10,2),
 category VARCHAR(50)
);

alter table inventory modify column id int auto_increment ;

insert into inventory (name, quantity, price, category) values 
('tv', 0, 20000, 'electronics'),
('hairy dryer', 1, 2000, 'lifestyle'),
('iron', 2, 450, 'home applicance'),
('mobile', 10, 20000, 'electronics');

select * from inventory;

select name, price from inventory where quantity > 0 and category = 'electronics' order by price desc;
 