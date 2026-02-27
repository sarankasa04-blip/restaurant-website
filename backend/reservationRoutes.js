const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

router.post("/", async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: "Reservation saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving reservation" });
  }
});

module.exports = router;