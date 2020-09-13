-- * Create the `burgers_db`.
--   * Switch to or use the `burgers_db`.
--   * Create a `burgers` table with these fields:
--     * id: an auto incrementing int that serves as the primary key.
--     * burger_name: a string.
--     * devoured: a boolean.

-- Drops/deletes database if already exists -- 
DROP DATABASE IF EXISTS burgers_db;

-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create table 'burgers'
CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);