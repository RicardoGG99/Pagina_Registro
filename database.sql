-- CREATE DATABASE web2;

CREATE TABLE usuario(
    correo varchar(150) not null,
    user_name varchar(150) not null,
    pass varchar(150) not null,
    primary key (correo)
);