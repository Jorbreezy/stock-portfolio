const db = require('../db/db.js');
const bcrypt = require("bcryptjs");

const controller = {
  login(req, res, next) {
    const { email, password } = req.body;
    const text = 'SELECT * FROM users WHERE email=$1';

    db.query(text, [ email ], (err, data) => {
      if(err) return next(err);
      const results = data.rows;

      if(!results.length) return res.status(406).json({ message: " User not found! "}) 
      else {
        bcrypt.compare(password, data.rows[0].password)
        .then(async result => {
          if(!result) res.status(401).json({error: 'Invalid Username or password'})
          else {
            res.locals.email = email;
            return next();
          }
        })
      }
    });
  },
  register(req, res, next){
    const { password, email } = req.body;
    const queryString = 'SELECT * FROM users WHERE email = $1';
    // search for any rows in database where username exists
    db.query(queryString, [ email ] ,(err, data) => {
      if (err) {
        return next({
          log: 'An error has occurred in createUser',
          status: 400,
          err: { err },
        });
      }
      if (data.rows.length > 0) {
        return next({
          log: 'User already exists',
          status: 409,
          err: { err },
        });
      }
      // hash pasword with bcrypt
      bcrypt.hash(password, 10, (berr, hashedPassword) => {
        if (berr) {
          return next({
            log: 'Error when hashing password while creatin user.',
            status: 409,
            err: { berr },
          });
        }
        console.log('hashedPassword: ', hashedPassword);
        const queryArr2 = [email , hashedPassword];
        const queryStr = 'INSERT INTO users (email, password) VALUES($1, $2)';
        // stores username and hashed password in table in database
        db.query(queryStr, queryArr2, (qerr) => {
          if (qerr) {
            console.log(qerr);
            return next({
              log: 'An error has occurred in createUser',
              status: 400,
              err: { qerr },
            });
          }
          return next();
        });
      })
    })
  }
}; 

/*
  Users table
  CREATE TABLE users {
    _id serial PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  }


*/

module.exports = controller;