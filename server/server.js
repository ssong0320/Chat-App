const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 5001;

app.use(express.json());
app.use(cors());
const bcrypt = require('bcrypt');
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
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        const sql = 'INSERT INTO auth (username, password) VALUES (?, ?)';
        connection.query(sql, [username, hash], (err, result) => {
            if (err) throw err;
            res.send('Registered');
        });
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const sql = 'SELECT * FROM auth WHERE username = ?';
    connection.query(sql, [username], (err, result) => {
        if (err) {
            res.send('Login unsucessful'); 
        return;}
        if (result.length === 0) {
            res.status(400).send('bad query');
            return
        }
        
        bcrypt.compare(password, result[0].password, (err, result) => {
        if (result) {
            res.send('Login sucessful');
        } else {
            res.send('Login unsucessful');
        }
        })
    })

})


app.listen(5001, () => {
    console.log('Server running on http://localhost:5001');
});