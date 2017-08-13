DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS description;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(300) NOT NULL,
    project_type VARCHAR,
    created_at TIMESTAMP,
    pictures INTEGER,
    description INTEGER
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL,
    picture_url VARCHAR NOT NULL
);

CREATE TABLE description (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL,
    description VARCHAR NOT NULL
);

INSERT INTO projects (project_name, project_type)
VALUES ('Wear Your Heritage With Pride', 'Fashion');

INSERT INTO projects (project_name, project_type)
VALUES ('Secret Gardens', 'Textiles Art');

INSERT INTO projects (project_name, project_type)
VALUES ('Conversations', 'Textiles Art');
