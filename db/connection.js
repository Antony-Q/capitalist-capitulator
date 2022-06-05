var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

require('dotenv').config()

const DB = mysql.createConnection(
    {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW
    },
);

module.exports = router;
module.exports = DB