CREATE TABLE blog_posts (
 id INT PRIMARY KEY,
 title VARCHAR(255),
 body TEXT,
 author_id INT,
 created_at TIMESTAMP,
 updated_at TIMESTAMP
);

INSERT INTO blog_posts value (1,'abc','dcvf',1,'2023-02-01','2023-02-10'),
(2,'aobc','doef',2,'2023-01-02','2023-01-10'),
(3,'cdks','dezzxmf',3,'2023-02-02','2023-02-10'),
(4,'dxed','domzdz',4,'2023-02-02','2023-01-10');

CREATE TABLE blog_comments (
 id INT PRIMARY KEY,
 post_id INT,
 body TEXT,
 author_id INT,
 created_at TIMESTAMP
);

INSERT INTO blog_comments value (1,1,'def',1,"2023-02-05"),
(2,2,'des',2,"2023-02-05"),
(3,1,'eed',3,"2023-02-06"),
(4,1,'zssd',1,"2023-02-06");


select * from blog_posts;
select * from blog_comments;

SELECT blog_posts.title, blog_posts.body, count(blog_comments.id) AS total
FROM blog_posts 
INNER JOIN blog_comments 
ON blog_posts.id= blog_comments.post_id
group by blog_comments.post_id
order by blog_posts.id desc limit 2;

select count(id) from blog_comments;


