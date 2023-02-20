CREATE DATABASE productdata;
CREATE TABLE product
(
	product_id INT AUTO_INCREMENT,
    product_name VARCHAR(256),
    unitprice FLOAT(8),
    category_id INT,
    PRIMARY KEY (product_id)
);


CREATE TABLE master_category
(
	category_id int auto_increment,
    category_name varchar(256),
    primary key (category_id)
);

alter table product
add foreign key (category_id) references master_category(category_id);

create table product_category
(
	product_id int ,
    category_id int,
    foreign key (product_id) references product(product_id),
    foreign key (category_id) references master_category(category_id)
);