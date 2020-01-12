const express = require("express");
const router = express.Router();
const booking = require("./booking");
// Obtenir les dispos
router.get("/visits", (req, res) => {
  // Est-ce que la date existe déjà ?
  for (let i = 0; i < booking.length; i++) {
    if (booking[i].date === req.query.date) {
      return res.json(booking[i]);
    }
  }
  // Si la date n'existe pas déjà
  const newElem = {
    date: req.query.date,
    slots: {
      "1000": { isAvailable: true },
      "1030": { isAvailable: true },
      "1100": { isAvailable: true },
      "1130": { isAvailable: true },
      "1400": { isAvailable: true },
      "1430": { isAvailable: true },
      "1500": { isAvailable: true },
      "1530": { isAvailable: true },
      "1600": { isAvailable: true },
      "1630": { isAvailable: true },
      "1700": { isAvailable: true },
      "1730": { isAvailable: true }
    }
  };
  booking.push(newElem);
  res.json(newElem);
});

module.exports = router;
