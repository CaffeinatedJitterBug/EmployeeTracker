const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'init',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then((response) => {
        if (response === 'View all departments') {
            viewAllDept();
            console.log('Working!');
        } else if (response === 'View all roles') {
            viewAllRoles();
            console.log('Working!');
        } else if (response === 'View all employees') {
            viewAllEmp();
            console.log('Working!');
        } else if (response === 'Add a department') {
            addDept();
            console.log('Working!');
        } else if (response === 'Add a role') {
            addRole();
            console.log('Working!');
        } else if (response === 'Add an employee') {
            addEmp();
            console.log('Working!');
        } else if (response === 'Update an employee role') {
            updateEmp();
            console.log('Working!');
        }
    })