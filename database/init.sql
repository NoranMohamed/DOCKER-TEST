CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL
);
INSERT INTO messages (text) VALUES ('Hello from the PostgreSQL Database!');
