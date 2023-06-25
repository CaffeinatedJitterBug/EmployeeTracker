const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'init',
            choices: ['View all departments', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then((response) => {
        if (response === 'View all departments') {

        } else if (response === 'Add a department') {

        } else if (response === 'Add a role') {

        } else if (response === 'Add an employee') {

        } else if (response === 'Update an employee role') {
            
        }
    })