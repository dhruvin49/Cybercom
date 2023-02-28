create table Salary(
  id int auto_increment primary key,
  name varchar(256),
  sex varchar(8),
  salary int(16)
);

insert into Salary (name, sex, salary) values
('A', 'm', '2500'),
('B', 'f', '1500'),
('C', 'm', '5500'),
('D', 'f', '500');

update Salary   
set sex = if(sex = 'm', 
                  'f',
                 'm');
select * from salary
			
                 
                 