const inquirer = require('inquirer');
const { addDept, addRole, addEmp, viewAllDept, viewAllRoles, viewAllEmp, updateEmp  } = require('./dbcommands');

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