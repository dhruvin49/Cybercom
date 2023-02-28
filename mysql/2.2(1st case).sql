#pending

create table Activity(
	player_id int not null,
    device_id int not null,
    event_date date,
    games_played int not null,
    primary key (player_id, event_date)
);

insert into Activity (player_id, device_id, event_date, games_played) values
(1, 2, '2016-03-01', 5),
(1, 2, '2016-05-02', 6),
(2, 3, '2017-06-25', 1),
(3, 1, '2016-03-02', 0),
(3, 4, '2018-03-07', 5);

select player_id, min(event_date) from activity group by player_id;

select player_id, min(device_id) from activity group by player_id;

select player_id, event_date, sum(games_played) from activity group by event_date, player_id;

select a.player_id, a.event_date, b.games_played as games_played_so_far
from activity a join activity b
on a.player_id = b.player_id




