const express = require("express");

const router = express.Router();
router.use(bodyParser.json());
const booking = require("./booking");

// Réserver un créneau
router.post("/visits", (req, res) => {
  // Est-ce que la date existe déjà ?
  for (let i = 0; i < booking.length; i++) {
    if (booking[i].date === req.body.date) {
      // Est-ce que le créneau est disponible ?
      if (booking[i].slots[req.body.slot].isAvailable === true) {
        // Si oui, on réserve
        booking[i].slots[req.body.slot].isAvailable = false;
        booking[i].slots[req.body.slot].name = req.body.name;
        return res.json({
          message: "Successfuly booked"
        });
      } else {
        // Si non, on affiche une erreur
        return res.json({
          error: {
            message: "Slot already booked"
          }
        });
      }
    }
  }
  const newElem = {
    date: req.body.date,
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
  newElem.slots[req.body.slot] = {
    name: req.body.name,
    isAvailable: false
  };
  booking.push(newElem);
  res.json({
    message: "Successfuly booked"
  });
});

module.exports = router;
