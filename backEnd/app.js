const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const ProductReviewRoute = require("./routes/productReviewRoute");
const dashboardRoute = require("./routes/dashboardRoute");
const checkUser = require("./middleware/api/v1/checkuser");

//const cors = require("cors");

const app = express();
app.use(express.static("public"));
//app.use(cors({ origin: "*" }));
//app.use(cors({ origin: "*" }));

//load the environment variables
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("DB connected successfully");
});

//middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
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
    // used with the Express.js framework for session storage.
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
app.use(fileUpload());

//Routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("*", checkUser);
app.use("/users", userRoute);
app.use("/dashoard", dashboardRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/reviews", ProductReviewRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
