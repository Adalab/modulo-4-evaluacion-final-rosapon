CREATE TABLE usuarios_db (
id int auto_increment primary key,
email varchar(50) unique,
nombre varchar(50),
dirección varchar(120),
password varchar(45)
);

ALTER TABLE usuarios_db
MODIFY COLUMN password VARCHAR(150);