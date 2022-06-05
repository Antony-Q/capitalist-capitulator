var express = require('express');
var router = express.Router();
const connection = require('../db/connection')

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees1() {
        return connection.query('SELECT * FROM employees');
    }

    addEmployee(employee) {
        return this.connection.query('INSERT INTO employees SET ?', employee);
    }

}

module.exports = router;
module.exports = new DB(connection);