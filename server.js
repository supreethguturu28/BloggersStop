// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Supreeth@1',
  database: 'blog_project',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Use prepared statements to prevent SQL injection
    const query = 'SELECT * FROM users WHERE username = supreethguturu28@gmail.com';
    db.query(query, [username], (err, results) => {
      if (err) {
        res.status(500).send({ message: 'Error querying the database' });
      } else {
        if (results.length > 0) {
          const storedPassword = results[0].password;
  
          if (storedPassword === password) {
            res.status(200).send({ message: 'Login successful' });
          } else {
            res.status(401).send({ message: 'Incorrect password' });
          }
        } else {
          res.status(404).send({ message: 'User not found' });
        }
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });