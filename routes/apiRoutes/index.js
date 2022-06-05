var express = require('express');
var router = express.Router();
const db = require('../../db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

const rolesArray = [];

db.connect(function (err) {
    
    if (err) {

        console.log("connection error")
        console.log(err)
    }

    init();
});

function quit() {

    console.log(("Application terminated."));
    process.exit();
}

function viewEmployees() {

    const request = "SELECT * FROM employees";
    db.query(request, function (err, res) {

        if (err) throw err;
        console.log(("Employees: "));
        cTable(res);
        inquirer.prompt([

            {

                type: 'list',
                name: 'choice',
                message: 'select:',
                choices: [
                    'Main menu',
                    'Exit'

                ],
            }
            
        ]).then((answer) => {

            switch (answer.choice) {

                case 'Main menu':
                    init();
                    break;
                case 'Exit':
                    quit();
            }
        })
    })
};

function viewRoles() {

    const request = "SELECT * FROM roles";
    db.query(request, function (err, res) {

        if (err) throw err;

        console.log(("Roles: "));
        console.log(("1: Dish Washer"));
        console.log(("2: Server"));
        console.log(("3: Line Cook"));
        console.log(("3: Lower Manager"));
        cTable(res);
        inquirer.prompt([

            {

                type: 'list',
                name: 'choice',
                message: 'select: ',
                choices: [
                    'Main menu',
                    'Exit'

                ]
            }
        ])

            .then((answer) => {

                switch (answer.choice) {

                    case 'Main menu':
                        init();
                        break;
                    case 'Exit':
                        quit();

                }
            })
    })
};

function viewDepartments() {

    const request = "SELECT * FROM department";
    db.query(request, function (err, res) {

        if (err) throw err;
        console.log(("Departments:"));
        cTable(res);
        inquirer.prompt([

            {

                type: 'list',
                name: 'choice',
                message: 'select: ',
                choices: [

                    'Main Menu',
                    'Exit'
                ]
            }
        ])

            .then((answer) => {

                switch (answer.choice) {

                    case 'Main menu':
                        init();
                        break;
                    case 'Exit':
                        quit();
            }
        })
    })
};

function newEmployee() {

    inquirer.prompt([
        
        {

            type: 'input',
            message: 'Enter employees first name.',
            name: 'FirstName'

        },
        {

            type: 'input',
            message: 'Enter employees last name.',
            name: 'LastName'

        },
        {

            type: "number",
            message: "Enter the employees role id. 1:Dish washer   2:Server   3:Line Cook   4:Lower Manager",
            name: 'RoleID',

        },
        {

            type: "number",
            message: 'Enter thier managers ID',
            name: 'ManagerID',

        }])

        .then(function (res) {

            const crit = [res.FirstName, res.LastName, res.RoleID, res.ManagerID];
            const sql = 'INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)';
            db.query(sql, crit, function (err, response) {

                if (err) throw err;
                cTable(response);
                inquirer.prompt([

                    {

                        type: 'list',
                        name: 'choice',
                        message: 'select: ',
                        choices: [
                            'Main menu',
                            'Exit'

                        ]
                    }
                ]).then((answer) => {

                    switch (answer.choice) {

                        case 'Main menu':
                            init();
                            break;
                        case 'Exit':
                            quit();
                    }
                })
            })
        })
    };

function newRoles() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new job title.',
            name: 'position'
        },
        {

            type: 'input',
            message: 'Enter the Employees salary.',
            name: 'salary'

        }])

        .then(function (res) {

            const crit = [res.position, res.salary];
            const sql = 'INSERT INTO roles(title, salary) VALUES (?,?)';
            db.query(sql, crit, function (err, response) {

                if (err) throw err;
                cTable(response);
                inquirer.prompt([
                    {

                        type: 'list',
                        name: 'choice',
                        message: 'select: ',
                        choices: [
                            'Main menu',
                            'Exit'

                        ]}

                ]).then((answer) => {

                    switch (answer.choice) {

                        case 'Main menu':
                            init();
                            break;
                        case 'Exit':
                            Quit();
                    }
                })
            })
        })
    };

function newRoles(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new job title.',
            name: 'position'
        },
        {
            type: 'input',
            message: 'Enter the Employees salary.',
            name: 'salary'
        }
    ])

        .then(function (res) {
            const crit = [data.position, res.salary];
            const sql = 'INSERT INTO roles(title, salary) VALUES (?,?)';
            db.query(sql, crit, function (err, response) {
                if (err) throw err;
                cTable(response);
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'choice',
                        message: 'select: ',
                        choices: [
                            'Main menu',
                            'Exit'
                        ]
                    }

                ]).then((answer) => {

                    switch (answer.choice) {
                        case 'Main menu':
                            init();
                            break;
                        case 'Exit':
                            Quit();
                    }
                })
            })
         })};

function newDepartments() {

    inquirer.prompt([

        {

            type: 'input',
            message: 'Enter name of department',
            name: 'DepartmentName'

        },
    ])

        .then(function (res) {

            const crit = [res.DepartmentName];
            const sql = 'INSERT INTO department(department_name) VALUES (?)';

            db.query(sql, crit, function (err, response) {

                if (err) throw err;
                cTable(response);
                inquirer.prompt([

                    {

                        type: 'list',
                        name: 'choice',
                        message: 'select:',
                        choices: [
                            'Main menu',
                            'Exit'
                        ]}

                ]).then((answer) => {
                    switch (answer.choice) {
                        case 'Main menu':
                            init();
                            break;
                        case 'Exit':
                            quit();
                    }
                })
            }
    )
})};

function updateEmployeeRole() {

    db.query(response => {
        response.forEach((roles) => { rolesArray.push(roles.title); });
    })

        .then(res1 => {

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select: ',
                    choices: res1
                }
            ])

                .then(res2 => newRoles(res2))
                .then(answer => {
                    switch (answer.choice) {
                        case 'Main menu':
                            init();
                            break;
                        case 'Exit':
                            quit();
                    }
                })

        })
};

function init() {

    inquirer.prompt([
        {

            type: 'list',
            name: 'choice',
            message: 'Select: ',
            choices: [
                'View Employees',
                'View Positions',
                'View Departments',
                'Add New Employee',
                'Add Positions',
                'Add Departments',
                'Update the Employees Position',
                'Exit'

            ],
        }])

        .then((answer) => {

            switch (answer.choice) {

                case 'View Employees':
                    viewEmployees();
                    break;
                case 'View Positions':
                    viewRoles();
                    break;
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'Add New Employees':
                    newEmployee();
                    break;
                case 'Add Positions':
                    newRoles("APNR");
                    break;
                case 'Add Departments':
                    newDepartments();
                    break;
                case 'Update the Employees Position':
                    if (rolesArray) {
                        updateEmployeeRole(rolesArray);
                    }
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    quit();
                    break;
            }
        }
    )
};

module.exports = router;