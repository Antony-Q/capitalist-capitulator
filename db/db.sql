DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;
USE tracker;

CREATE TABLE employees(
id INT AUTO_INCREMENT,
first_name VARCHAR(25),
last_name VARCHAR(25),
job_title_id INT,
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY(manager_id) REFERENCES employees (id)
);