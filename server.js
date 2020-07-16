const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Middlewares

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Routing

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Jorge',
    anio: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Listening in port 3000');
});
