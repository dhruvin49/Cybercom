CREATE TABLE person (
    id INT,
    email VARCHAR(24)
);


insert into person (id, email) values ('1', ' john@example.com'),
('2', ' bob@example.com'),
('3', 'john@example.com');


Delete from person where id not in (SELECT min(id) from person group by email);