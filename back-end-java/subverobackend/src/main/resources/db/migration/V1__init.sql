DROP TABLE IF EXISTS chapters;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(8) NOT NULL
);

CREATE TABLE chapters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chapterCoverHash VARCHAR(10) NOT NULL,
    chapterNumber INT NOT NULL,
    chapterTitle VARCHAR(255) NOT NULL,
    chapterDescription TEXT NOT NULL,
    chapterImagesHash VARCHAR(10) NOT NULL,
    chapterType VARCHAR(8) NOT NULL,
    chapterReleaseDate DATETIME NOT NULL
);