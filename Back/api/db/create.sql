CREATE DATABASE "UnionOrganizer"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE job (
	id serial PRIMARY KEY,
   	name VARCHAR ( 250 ) UNIQUE NOT NULL,
   	description text NOT NULL
);

CREATE TABLE area (
    area_id serial PRIMARY KEY,
    location text not null,
    FOREIGN KEY (job_id) REFERENCES job (id) ON DELETE CASCADE
);

CREATE TABLE union_member (
    id serial PRIMARY KEY,
    status integer not null,
    name text not null,
    area_id integer,
    FOREIGN KEY (job_id) REFERENCES job (id) ON DELETE CASCADE,
);

CREATE TABLE complaint (
    id serial PRIMARY KEY,
    area_id integer,
    FOREIGN KEY (job_id) REFERENCES job (id) ON DELETE CASCADE,
);

CREATE TABLE strike (
    id serial PRIMARY KEY,
    title VARCHAR ( 50 ) UNIQUE NOT NULL,
   	description text NOT NULL,
    area_id integer, 
    FOREIGN KEY (job_id) REFERENCES job (id) ON DELETE CASCADE,
);

CREATE TABLE demand (
	id serial PRIMARY KEY,
    area_id integer,
   	title VARCHAR ( 50 ) UNIQUE NOT NULL,
   	reason text NOT NULL,
    votes integer NOT NULL,
    FOREIGN KEY (job_id) REFERENCES job (id) ON DELETE CASCADE,
);
