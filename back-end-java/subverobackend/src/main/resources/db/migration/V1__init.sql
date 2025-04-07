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
    chapter_cover_hash VARCHAR(10) NOT NULL,
    chapter_number INT NOT NULL,
    chapter_title VARCHAR(255) NOT NULL,
    chapter_description TEXT NOT NULL,
    chapter_images_hash VARCHAR(10) NOT NULL,
    chapter_type VARCHAR(8) NOT NULL,
    chapter_release_date DATETIME NOT NULL
);