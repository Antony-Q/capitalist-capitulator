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

INSERT INTO roles(title, salary, department_id)
        VALUES
        ("dishwasher", 7.25, 1),
        ("server", 3.00, 2),
        ("line_cook", 10.00, 3),
        ("lower_manager", 15.00, 4);



INSERT INTO parties
  (name, description)
VALUES
  ('JS Juggernauts', 'The JS Juggernauts eat, breathe, and sleep JavaScript. They can build everything you could ever want in JS, including a new kitchen sink.'),
  ('Heroes of HTML', 'Want to see a mock-up turn into an actual webpage in a matter of minutes? Well, the Heroes of HTML can get it done in a matter of seconds.'),
  ('Git Gurus', 'Need to resolve a merge conflict? The Git Gurus have your back. Nobody knows Git like these folks do.');

INSERT INTO candidates
  (first_name, last_name, party_id, industry_connected)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 1, 0),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 0),
  ('Edward', 'Bellamy', 3, 0),
  ('Montague', 'Summers', 3, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', NULL, 1);
  