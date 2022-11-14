const { Flights } = require('../models/Flight');
const { v4: uuid } = require('uuid');
const { reSync } = require('fs');

// GET ALL FLIGHTS
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
      message: 'All users',
      flights: flights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// GET A SINGLE FLIGHT
exports.getFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const Flight = Flights.find((flight) => flight.id === id);
    res.status(200).json({
      message: 'Flight Record Found',
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD / BOOK FLIGHT
exports.createFlight = async (req, res) => {
  try {
    // const { title, time, price, date } = await req.body;
    // const newFlight = {
    //   id: uuid(),
    //   title,
    //   time,
    //   price,
    //   date,
    // };

    const { title, price } = await req.body;
    const newFlight = {
      id: uuid(),
      title,
      time: new Date().toLocaleTimeString(),
      price,
      date: new Date().toLocaleDateString(),
    };

    Flights.push(newFlight);

    res.status(201).json({
      message: 'New Flight Recorded / Flight Booked',
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
    const { title, price } = await req.body;
    flight.title = title;
    flight.price = price;
    res.status(200).json({
      message: 'Flight Record Updated',
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE FLIGHT
exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const user = Flights.find((flight) => flight.id === id);
    Users.splice(Flights.indexOf(flight), 1);
    res.status(200).json({
      message: 'Flight Record Deleted',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
