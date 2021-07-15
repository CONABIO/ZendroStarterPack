CREATE USER zendro WITH SUPERUSER PASSWORD 'zendro';
CREATE DATABASE zendro_development OWNER zendro;
CREATE DATABASE zendro_test OWNER zendro;
CREATE DATABASE zendro_production OWNER zendro;

\c zendro_development
CREATE EXTENSION postgis;
\c zendro_production
CREATE EXTENSION postgis;
\c zendro_test
CREATE EXTENSION postgis;
