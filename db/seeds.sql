SELECT * FROM department; 
SELECT * FROM roles;
SELECT * FROM employees;

INSERT INTO employees(first_name, last_name, job_title_id, manager_id)
        VALUES
        ("Zed", "Ded",'1',1),
        ("Bart", "Chalmers",'1',1),
        ("Randy", "Johnson",'2',1),
        ("Mikayla", "Smith",'2',1),
        ("Rhonda", "Beesly",'3',2),
        ("Seth", "MacFarlane",'3',2),
        ("Regi", "Struup",'4',2),
        ("James", "Marsh",'4',2)
        ;

INSERT INTO department(department_name)
VALUES ("shift_1"),("shift_2"),("shift_3"),("shift_4");

INSERT INTO roles(title, salary, department_id)
        VALUES
        ("dishwasher", 7.25, 1),
        ("server", 3.00, 2),
        ("line_cook", 10.00, 3),
        ("lower_manager", 15.00, 4);