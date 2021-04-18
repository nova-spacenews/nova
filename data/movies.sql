DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    release_date VARCHAR(255),
    vote VARCHAR(255),
    image_url VARCHAR(255),
    overview TEXT 
);

