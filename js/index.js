const inquirer = require('inquirer');
const mysql = require('mysql2');

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'init',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            }
        ])
        .then(({ init }) => {
            if (init === 'View all departments') {
                viewAllDept();
            } else if (init === 'View all roles') {
                viewAllRoles();
            } else if (init === 'View all employees') {
                viewAllEmp();
            } else if (init === 'Add a department') {
                addDept();
                console.log('Working!');
            } else if (init === 'Add a role') {
                addRole();
                console.log('Working!');
            } else if (init === 'Add an employee') {
                addEmp();
                console.log('Working!');
            } else if (init === 'Update an employee role') {
                updateEmp();
                console.log('Working!');
            }
        })
}

init();

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
			startAgain();
		}
	});
}

function viewAllRoles() {
	db.query(`SELECT * FROM roles`, (err, results) => {
		if (err) {
			console.log('An error has occured, please contact the developer for help');
		} else {
			console.log(results);
			startAgain();
		}
	});
}

function viewAllEmp() {
	db.query(`SELECT * FROM employee`, (err, results) => {
		if (err) {
			console.log('An error has occured, please contact the developer for help');
		} else {
			console.log(results);
			startAgain();
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
				startAgain();
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
				startAgain();
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
					startAgain();
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
				startAgain();
			});
		})

}

function startAgain() {
	inquirer
		.prompt([
			{
				type: 'confirm',
                message: 'Would you like to do anything else?',
                name: 'confirm'
			}
		])
        .then((response) => {
            if (response.confirm === true) {
				init();
			}
        })
}
