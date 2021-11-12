CREATE DATABASE news_portal;

USE news_portal;

CREATE TABLE news (
  id_new INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  description TEXT,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO news (title, description) values ('my title', 'content of the news');

SELECT * FROM news_portal.news;