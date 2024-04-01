const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const methodOverride = require("method-override");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");

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
//session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

//Routes

app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
