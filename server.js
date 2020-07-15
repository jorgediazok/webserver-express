const express = require('express');
const app = express();

//Middlewares
app.use(express.static(__dirname + '/public'));

//Routing

app.get('/', (req, res) => {
  // res.send('HELLO WORLD');
  let output = {
    nombre: 'Jorge',
    edad: 32,
    url: req.url,
  };
  res.send(output);
});

app.get('/data', (req, res) => {
  res.send('Hola Data');
});

app.listen(3000, () => {
  console.log('Listening in port 3000');
});
