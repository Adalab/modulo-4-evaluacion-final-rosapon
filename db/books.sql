CREATE DATABASE books;
USE books;

CREATE TABLE AllBooks (
IdBook INT auto_increment primary key,
title varchar (40) not null, 
author varchar (20) not null,
genre varchar (20),
year tinyint
);
ALTER TABLE AllBooks MODIFY COLUMN year INT;
UPDATE AllBooks
SET year = 2022
WHERE title = 'El power Ranger rosa' AND author = 'Christo Casas' AND genre = 'Humor' AND year = 22;
 

INSERT INTO AllBooks (title, author, genre, year) VALUES ("El power Ranger rosa", "Christo Casas", "Humor", "22");
INSERT INTO AllBooks (title, author, genre, year) VALUES ("Tú eres la tarea", "Frank Kafka", "Poesía", "2024");
INSERT INTO AllBooks (title, author, genre, year) VALUES ("Un lugar soleado para gente sombría", "Mariana Enriquez", "Terror", "2024");
INSERT INTO AllBooks (title, author, genre, year) VALUES ("La materia de las sombras", "Antonio Runa", "Terror", "2024");
INSERT INTO AllBooks (title, author, genre, year) VALUES ("La república del dragón", "Rebeca F. Kuang", "Ciencia ficción", "2023");
INSERT INTO AllBooks (title, author, genre, year) VALUES ("Podría ser peor", "Pictoline", "Humor", "2022");


