CREATE TABLE sales (
    id INT PRIMARY KEY,
    date DATE,
    customer_id INT,
    product_id INT,
    quantity INT,
    total_price DECIMAL(10 , 2 )
);

alter table sales modify column id int auto_increment;
insert into sales (date, customer_id, product_id, quantity, total_price) values 
('2023-02-23', '1', '1', '1', '2000'),
('2023-02-21', '2', '1', '2', '4000'),
('2023-02-25', '3', '2', '1', '1000'),
('2022-03-23', '1', '1', '1', '2000'),
('2023-04-21', '2', '1', '2', '4000'),
('2023-05-25', '3', '2', '1', '1000');

SELECT 
    SUM(total_price), MONTH(date)
FROM
    sales
WHERE
    YEAR(date) = 2023
GROUP BY MONTH(date)
ORDER BY MONTH(date) ASC;

