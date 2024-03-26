const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB connect
mongoose.connect("mongodb://localhost/marketplace").then(() => {
  console.log("DB connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
