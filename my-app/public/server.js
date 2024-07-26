const express = require("express");
const app = express();
const port = 3001;

let seats = Array(30).fill(false);

app.use(express.json());
app.use(express.static("public"));

app.get("/seats", (req, res) => {
  res.json(seats);
});

app.post("/seats", (req, res) => {
  const { index, status } = req.body;
  if (index >= 0 && index < seats.length) {
    seats[index] = status;
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
