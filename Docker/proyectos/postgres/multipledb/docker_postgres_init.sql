CREATE USER entradasatualcance WITH PASSWORD 'pswentradasatualcance' CREATEDB;
CREATE DATABASE entradasatualcance
    WITH 
    OWNER = entradasatualcance
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;