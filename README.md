# EmployeeTracker

[Video Tutorial](https://drive.google.com/file/d/1Sr-tUjWjljBcC5B5WIPfT4rUFGMo9MjC/view?usp=sharing)

## Description
The Employee Tracker is a tool made for businesses that stores information on your employees. Departments, roles, how much each role makes, which departments those roles are in, as well as employee data can be stored in this database.

## Installation
Download this repository and save it in a spot where you can easily reach it in your command line.

## Usage
Open your command line and navigate to the EmployeeTracker repository. Before running the program, be sure to run "mysql -uroot < db/schema.sql" to initialize the database. You can run "mysql -uroot -D employees_db < seeds.sql" to seed in some example data if you wish. Run "node js/index.js" to start the program. When the main menu opens up, use your arrow keys to select the option you want and press enter to make your selection. Selecting "View Departments", "View Roles", or "View Employees" will present you with all the data stored in the database that's related to your selection. "Add a Department", "Add a Role", and "Add an Employee" will allow you to enter new data into the database. Follow the prompts after you make your selection to add a new department, role or employee to the database. You can also update existing employee data with "Update Employee". If you wish to continue after finishing a task, simply type 'y' into your command line when prompted. Exit the program with CTRL + C.

## License
No license has been applied to this project.