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

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    department_id VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE job_title(
    id INT AUTO_INCREMENT,
    title VARCHAR(25),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);