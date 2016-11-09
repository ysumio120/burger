CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id integer AUTO_INCREMENT,
	burger_name varchar(50),
	devoured boolean default false,
	date TIMESTAMP,
    PRIMARY KEY(id)
)

