const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'checkin_db'
})

connection.connect(function (err) {
    if(err) console.log('Connecting failed!')
})

module.exports = connection