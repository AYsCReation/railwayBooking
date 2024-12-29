const express = require('express');
const { signup, login } = require('../controllers/authControllers');

const authRoutes = express.Router();

authRoutes.post('/signup', signup);
authRoutes.post('/login', login);

module.exports = authRoutes;
