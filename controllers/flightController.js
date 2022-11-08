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
      // time: new Date().toLocaleTimeString(),
      time,
      price,
      // date: new Date().toLocaleDateString(),
      date,
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
// UPDATE / EDIT FLIGHT
exports.updateFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    const { title, time, price, date } = await req.body;
    flight.title = title;
    flight.time = time;
    flight.price = price;
    flight.date = date;
    res.status(200).json({
      message: 'Flight Updated / Edited',
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// TERMINATE / DELETE FLIGHT
exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    Flights.splice(Flights.indexOf(flight), 1);
    res.status(200).json({
      message: 'Flight Terminated / Deleted',
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
