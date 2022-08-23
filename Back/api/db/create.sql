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
    job_id INTEGER REFERENCES job(id)
);

CREATE TABLE union_member (
    id serial PRIMARY KEY,
    status integer not null,
    name text not null,
    area_id integer,
    job_id INTEGER REFERENCES job(id)
);

CREATE TABLE complaint (
    id serial PRIMARY KEY,
    dislike text not null,
    area_id integer,
    job_id INTEGER REFERENCES job(id)
);

CREATE TABLE strike (
    id serial PRIMARY KEY,
    title VARCHAR ( 50 ) UNIQUE NOT NULL,
   	description text NOT NULL,
    area_id integer, 
    attendants_array integer[] not null, 
    job_id INTEGER REFERENCES job(id)
);

CREATE TABLE demand (
	id serial PRIMARY KEY,
    area_id integer,
   	title VARCHAR ( 50 ) UNIQUE NOT NULL,
   	reason text NOT NULL,
    votes integer NOT NULL,
    job_id INTEGER REFERENCES job(id)
);

INSERT INTO "roles" ("id","name","createdAt","updatedAt") VALUES ($1,$2,$3,$4) RETURNING "id","name","createdAt","updatedAt";
