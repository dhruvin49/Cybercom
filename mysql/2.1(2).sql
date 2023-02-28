CREATE TABLE cinema (
    id int not null AUTO_INCREMENT,
    movie VARCHAR(16),
    description VARCHAR(256),
    rating FLOAT,
    PRIMARY KEY (id)
);

insert into cinema (movie, description, rating) values
('Science', 'great 3d', '8.5'),
('irish', 'boring', '6.2'),
('Ice song', 'Fantacy', '8.6'),
('House card', 'interesting', '9.1');

select * from cinema where id%2 <> 0 and description <> 'boring' order by rating desc; 