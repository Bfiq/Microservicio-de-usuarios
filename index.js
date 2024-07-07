require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const passport = require('passport');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport
require('./config/passport')(passport);
app.use(passport.initialize());

//test de conexión a la bd
sequelize.authenticate()
  .then(() => {
    console.log('Conectado con la bd!');
  })
  .catch(err => {
    console.error('Error al conectar la bd:', err);
  });

// rutas
const userRoutes = require('../routes/userRoutes');
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Corriendo servidor...');
});
