const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    db.query(`SELECT departments FROM employees_db`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function viewAllRoles() {
    db.query(`SELECT roles FROM employees_db`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function viewAllEmp() {
    db.query(`SELECT first_name, last_name FROM employees_db`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function addDept(name) {
    db.query(`INSERT INTO department()`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function addRole(role) {
    db.query(`INSERT INTO roles()`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function addEmp(dept) {
    db.query(`INSERT INTO employees()`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function updateEmp() {
    db.query(`UPDATE employee SET first_name = ? last_name = ? role_id = ? manager_id = ? WHERE id= ?`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});