const express = require("express");
const app = express();

const students = require("./data");

// Middle Ware

app.use(express.json());

// GET Method

app.get("/task", (req, res) => {
  return res.json(students);
});

// POST Method

app.post("/task", (req, res) => {
  const user = [
    {
      id: students.length + 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    },
  ];

  students.push(user);

  return res.json(user);
});

// Update Method

app.put("/task/:id", (req, res) => {
  const id = req.params.id;

  const title = req.body.title;
  const price = req.body.price;
  const data = req.body;

  const student = students.findIndex((item) => item.id === Number.parseInt(id));

  if (student >= 0) {
    const std = students[student];
    std.title = title;
    std.price = price;
    return res.json(std);
  } else {
    return res.status(404).json({ error: "data not found" });
  }

  return res.json({ data: update });
});

// Delete Method

app.delete("/task/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const student = students.findIndex((item) => item.id === Number.parseInt(id));

  if (student >= 0) {
    const std = students[student];

    students.splice(student, 1);
    res.json(std);
  } else {
    res.status(404).send("Data Not Found");
  }
});

// Server Creating

app.listen(5173, () => {
  console.log("express is running!");
});
