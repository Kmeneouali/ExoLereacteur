const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cowsay = require("cowsay");
const app = express();

app.use(bodyParser.json());

/* Connection dataBase  */

mongoose.connect("mongodb://localhost/students-app", { useNewUrlPArser: true });

/* Creation des modeles   */

const Students = mongoose.model("Student", {
  name: {
    type: String,
    defaut: ""
  },
  age: {
    type: Number
  }
});

app.get("/", async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/create", async (req, res) => {
  try {
    const newStudent = new Students({
      name: req.body.name,
      age: req.body.age
    });
    res.json(newStudent);

    await newStudent.save();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/update", async (req, res) => {
  try {
    const student = await Students.findOne({ _id: req.body.id });
    student.name = req.body.name;
    student.age = req.body.age;
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/delete", async (req, res) => {
  try {
    const student = await Students.findOne({ _id: req.body.id });
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log(
    cowsay.say({
      text: "Server started ",
      e: "oO",
      T: "U "
    })
  );
});
