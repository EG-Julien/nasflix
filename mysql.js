const puppeteer = require('puppeteer');
const mysql     = require('mysql');

function connect_db () {
    let connection = mysql.createConnection({
        host     : '192.168.1.145',
        user     : 'nasflix',
        password : 'nasflix123',
        database : 'db'
    });

    return connection;
}