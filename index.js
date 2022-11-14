const express = require('express');

const { json } = require('express');

const flight = require('./router/flightRoute');

const app = express();

app.use(json());

app.use('/', flight);

const PORT = process.env.PORT || 6000; // port of connect

app.get('/', (req, res) => {
  res.send('Zuri Training Portal');
});

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
