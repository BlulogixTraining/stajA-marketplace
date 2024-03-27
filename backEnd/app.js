const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const userRoute = require("./routes/userRoute");
const app = express();

//DB connect
mongoose.connect("mongodb://localhost/marketplace").then(() => {
  console.log("DB connected successfully");
});

//middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/users", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
