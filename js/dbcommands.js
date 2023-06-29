const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

function viewAllDept() {
    db.query(`SELECT * FROM department`, (err, results) => {
        if (err) {
            console.log('An error has occured, please contact the developer for help');
        } else {
            console.log(results);
        }
    });
}

function viewAllRoles() {
    db.query(`SELECT * FROM roles`, (err, results) => {
        if (err) {
            console.log('An error has occured, please contact the developer for help');
        } else {
            console.log(results);
        }
    });
}

function viewAllEmp() {
    db.query(`SELECT * FROM employee`, (err, results) => {
        if (err) {
            console.log('An error has occured, please contact the developer for help');
        } else {
            console.log(results);
        }
    });
}

function addDept() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the department you would like to add?',
                name: 'add_department'
            }
        ])
        .then((response) => {
            db.query(`INSERT INTO department (name) VALUES (?)`, response.add_department, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        })

}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of role would you like to add?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is salary for this role?',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is the department ID for this role?',
                name: 'dept_id'
            },
        ])
        .then((response) => {
            db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [response.title, response.salary, response.dept_id], (err, results) => {
                if (err) {
                    console.log('An error has occured, please contact the developer for help');
                }
            });
        })
}

function addEmp() {
    db.query('SELECT id AS value, title AS name FROM roles', (err, choices) => {
        db.query
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the first name of the employee you would like to add?',
                    name: 'firstname'
                },
                {
                    type: 'input',
                    message: 'What is their last name?',
                    name: 'lastname'
                },
                {
                    type: 'list',
                    message: 'What is their role?',
                    name: 'role',
                    choices
                },
                {
                    type: 'input',
                    message: 'What is their department ID?',
                    name: 'department'
                }
            ])
            .then((response) => {
                db.query(`INSERT INTO employee (first_name, last_name, role_id, department_id) VALUES (?, ?, ?, ?)`, response, (err, results) => {
                    if (err) {
                        console.log('An error has occured, please contact the developer for help');
                    }
                })
            })
    });
}

function updateEmp(id, firstname, lastname, role, manager) {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which employee would you like to update information for?',
                name: 'employee_select'
            },
            {
                type: 'list',
                message: 'Which of the following to you wish to update?',
                name: 'update_select',
                choices: ['First name', 'Last name', 'Role', 'Manager']
            },
            {
                type: 'input',
                message: 'What do you want to change this to?',
                name: 'update',
            }
        ])
        .then((response) => {
            db.query(`UPDATE employee SET id = ? first_name = ? last_name = ? role_id = ? manager_id = ? WHERE id= ?`, id, firstname, lastname, role, manager, (err, results) => {
                if (err) {
                    console.log('An error has occured, please contact the developer for help');
                }
            });
        })
    
}

module.exports = { addDept, addRole, addEmp, viewAllDept, viewAllRoles, viewAllEmp, updateEmp };
