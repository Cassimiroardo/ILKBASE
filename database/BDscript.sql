DROP DATABASE IL_KBASE;
CREATE DATABASE IL_KBASE;

USE IL_KBASE;

CREATE TABLE Users(
	id BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    
    PRIMARY KEY(id)
);

CREATE TABLE Competences(
	id BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    level TINYINT NOT NULL,
    id_user BIGINT NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES Users(id) ON DELETE CASCADE
); 

CREATE TABLE Posts(
	id BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    title VARCHAR(255),
    content TEXT,
    technology VARCHAR(255),
    created DATE,
    hour TIME,
    id_user BIGINT NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Comments(
	id BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    content TEXT,
    created DATE,
    hour TIME,
    id_user BIGINT NOT NULL,
    id_post BIGINT NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY(id_post) REFERENCES Posts(id) ON DELETE CASCADE
);

SELECT * FROM Users;

SELECT * FROM Posts;

SELECT * FROM Posts AS p JOIN Comments AS c ON c.id_post = p.id JOIN Users AS u ON c.id_user = u.id WHERE p.id = 1;

SELECT * FROM Competences;

