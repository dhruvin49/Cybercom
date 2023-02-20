create database cricketers;
create table crickter
(
id int unique AUTO_INCREMENT,
player_name varchar(256) not null,
player_country varchar(256) not null,
expertise varchar(64) not null,
primary key(id)
);

insert into crickter (player_name,player_country,expertise)
value("warner","australia","opner"),
("Rohit","india","opner"),
("virat","india","BATSMAN"),
("Smith","australia","BATSMAN"),
("BAN-stoaks","England","Allrounder"),
("Dhoni","India","Captain"),
("Jadeja","india","allrounder"),
("rabada","australia","FAST-BOWLER"),
("Starck","australia","Faster"),
("Rashid_khan","Afghanistan","Spinner"),
("Boult","newzeland","Bowler");