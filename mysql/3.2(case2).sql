CREATE TABLE users (
 id INT PRIMARY KEY,
 name VARCHAR(255),
 created_at TIMESTAMP
);

insert into users values (1, 'dhruvin', '2019-01-01'),
(2, 'meet', '2022-01-01'),
(3, 'nevil', '2020-01-01'),
(4, 'neel', '2023-01-01'),
(5, 'vinci', '2022-04-01');


CREATE TABLE posts (
 id INT PRIMARY KEY,
 user_id INT,
 body TEXT,
 created_at TIMESTAMP
);

insert into posts values (1, 1, 'hello', 2022-02-01),
(2, 1, 'hii', '2021-02-01'),
(3, 2, 'how are u', 2022-02-25),
(4, 3, 'i do not know', 2021-08-08),
(5, 4, 'i am here', 2023-02-01);

CREATE TABLE likes (
 id INT PRIMARY KEY,
 user_id INT,
 post_id INT,
 created_at TIMESTAMP
);

