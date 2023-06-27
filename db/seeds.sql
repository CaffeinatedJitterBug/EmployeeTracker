INSERT INTO department (id, names)
VALUES (1, 'Finance'),
(2, 'Human Resources'),
(3, 'Marketing'),
(4, 'Sales'),
(5, 'Customer Support'),
(6, 'Management');

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'Accountant', 63651, 1),
(2, 'Auditor', 54783, 1),
(3, 'Bookkeeper', 40886, 1),
(4, 'Recruiter', 53848, 2),
(5, 'Labor relations specialist', 73125, 2),
(6, 'Benefits administrator', 70687, 2),
(7, 'Marketing analyst', 59780, 3),
(8, 'Marketing executive', 51086, 3),
(9, 'Digital strategist', 61031, 3),
(10, 'Sales associate', 57423, 4),
(11, 'Sales representative', 71879, 4),
(12, 'Cashier', 31293, 4),
(13, 'Call center representative', 36546, 5),
(14, 'Customer specialist', 42668, 5),
(15, 'Account representative', 58508, 5),
(16, 'Manager', 70333, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (16, 'Barbara', 'Doyle', 16, null),
(17, 'Jamie', 'Bench', 16, null),
(18, 'Darwin', 'Aquilina', 16, null),
(19, 'Melissa', 'Krieger', 16, null),
(20, 'Penny', 'Smith', 16, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Doe', 1, 16),
(2, 'Amanda', 'Brown', 2, 16),
(3, 'Trudy', 'Miller', 3, 16),
(4, 'Camilla', 'Larose', 4, 17),
(5, 'Benjamin', 'Devlin', 5, 17),
(6, 'Rudy', 'Chambers', 6, 17),
(7, 'Dylan', 'Monroe', 7, 18),
(8, 'Brian', 'Addams', 8, 18),
(9, 'Miranda', 'Cooper', 9, 18),
(10, 'Joshua', 'Lane', 10, 19),
(11, 'Fredrick', 'Mullaney', 11, 19),
(12, 'Brendan', 'Green', 12, 19),
(13, 'Gloria', 'Mulligan', 13, 20),
(14, 'Linda', 'Schneebaum', 14, 20),
(15, 'Dennis', 'Powers', 15, 20);