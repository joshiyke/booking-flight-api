const { Flights } = require('../models/Flight');
const { v4: uuid } = require('uuid');

// GET ALL FLIGHTS
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
      message: 'All flights',
      flights: flights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// GET SINGLE FLIGHT
exports.getFlights = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    res.status(200).json({
      message: 'Flight Found',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD / BOOK FLIGHT
exports.createFlight = async (req, res) => {
  try {
    const { title, time, price, date } = await req.body;
    const newFlight = {
      id: uuid(),
      title,
      time: new Date().toLocaleTimeString(),
      price,
      date: new Date().toLocaleDateString(),
    };

    Flights.push(newFlight);

    res.status(201).json({
      message: 'Flight Added / Booked',
      newFlight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update / edit user
exports.updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = Flights.find((user) => user.id === id);
    const { email, name, password } = await req.body;
    user.email = email;
    user.name = name;
    user.password = password;
    res.status(200).json({
      message: 'User Updated',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete User
exports.deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = Flights.find((user) => user.id === id);
    Flights.splice(Flights.indexOf(user), 1);
    res.status(200).json({
      message: 'User Deleted',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
