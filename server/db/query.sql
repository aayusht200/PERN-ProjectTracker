CREATE DATABASE project_tracker;

CREATE TABLE project (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    title VARCHAR,
    description TEXT,
    status VARCHAR,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE project_task (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    project_id UUID NOT NULL REFERENCES project(id) ON DELETE CASCADE,
    title VARCHAR,
    description TEXT,
    status VARCHAR,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);