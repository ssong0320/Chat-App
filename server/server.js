const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 5000;

app.use(express.json());
app.use(cors());
const bycrypt = require('bycrypt');
const socketIo = require('socket.io');
const saltRounds = 2;

const connection = mysql.createConnection({
    host: '34.27.144.22',
    user: 'root',
    password: '%%56Hu3#PB:zdy%D',
    database: 'ti_workshop_steven',
    port: 3306
});

connection.connect((error) => {
    if (error) {
      console.error('Failed to connect to the database:', error);
    } else {
      console.log('Connected to the database');
    }
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    bycrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        const sql = 'INSERT INTO auth (username, password) VALUES (?, ?)';
        connection.query(sql, [username, hash], (err, result) => {
            if (err) throw err;
            res.send('Registered');
        });
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});