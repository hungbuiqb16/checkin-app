const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'checkin_db'
})

conn.connect(function (err) {
    if(err) {
        console.log('Connecting failed!')
    } else {
        console.log('Connected!')
    }

})

module.exports = conn