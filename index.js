const express = require('express');
const { json } = require('express');
const flights = require('./controllers/flightController');
const models = require('./models/Flight');
const routes = require('./routes/flightRoute');

const app = express();

app.use(json());

app.use('/routes', routes);

const PORT = process.env.PORT || 5000; // port of connect

app.get('/', (req, res) => {
  res.send('Zuri Training Portal');
});

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
