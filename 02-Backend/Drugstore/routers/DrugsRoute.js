const express = require("../node_modules/express");
/* const uniqid = require("uniqid"); */
const mongoose = require("mongoose");
const router = express.Router();

const Drug = require("../DbSchema/Drug");

mongoose.connect("mongodb://localhost/Drugstore", { useNewUrlPArser: true });

/* Creation des modeles   */

// obtenir les quantités de tous les médicaments
router.get("/", async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ajouter un nouveau médicament à l'inventaire
router.post("/create", async (req, res) => {
  try {
    const name = req.body.name;
    const qte = req.body.quantity;
    if (name == undefined || qte == undefined || isNaN(qte)) {
      res.status(400).json({ message: "name or quantity is wrong " });
    }

    let drugs = await Drug.findOne({ name: name });
    if (drugs != null) {
      res
        .status(400)
        .json({ message: "Drug " + drugs.name + " already exists" });
    } else {
      drugs = new Drug({ name: name, quantity: qte });
      await drugs.save();
      res.json({ message: "Drog " + drugs.name + " Created " });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update quantity médicament à l'inventaire
router.put("/update/qantity", async (req, res) => {
  try {
    const id = req.body.id;
    const qte = Number(req.body.quantity);
    if (id == undefined || isNaN(qte)) {
      res.status(400).json({ error: "Bad request" });
    }
    const drugs = await Drug.findOne({ _id: id });
    drugs.quantity = drugs.quantity + qte;
    await drugs.save();
    res.json(drugs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update name médicament à l'inventaire
router.put("/update/name", async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    if (id == undefined || name == undefined) {
      res.status(400).json({ error: "Bad request" });
    }
    const drugs = await Drug.findOne({ _id: id });
    drugs.name = drugs.name;
    await drugs.save();
    res.json(drugs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Supprimer médicament à l'inventaire
router.delete("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    if (id == undefined) {
      res.status(400).json({ error: "id is wrong " });
    }
    const drugs = Drug.findOne({ _id: id });

    await drugs.remove();
    res.json({ message: "Drog Removed " });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
