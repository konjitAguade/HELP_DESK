const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Here we go!");
});
app.use(express.)
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`);
});
