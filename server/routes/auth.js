const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController.js');


//test
router.get('/test', (req, res) => {
  return res.send('GOT IT');
})

//Login
router.post('/login', login, (req, res) => {
  return res.status(200).json({ email: res.locals.email });
})

//SignUp
router.post('/register', register, (req, res) => {
  return res.status(200).send({ message: 'Signup successfully' });
})

module.exports = router;