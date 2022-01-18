const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your Mysql username
        user: 'root',
        // Your Mysql password
        password: '@legendsNeverDie21',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;