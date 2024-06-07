const express = require("express");
const connectDB = require("./config/db");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const ProductReviewRoute = require("./routes/productReviewRoute");
const dashboardRoute = require("./routes/dashboardRoute");
const cartRoute = require("./routes/cartRoute");
const favoriteRoute = require("./routes/favoriteRoute");
const productDetailsRoute = require("./routes/productDetailsRoute");
const sellerRoute = require("./routes/sellerRoute");
const storeRoute = require("./routes/storeRoute");
const orderRoute = require("./routes/orderRoute");
const addressRoute = require("./routes/addressRoute");
const paymentRoute = require("./routes/paymentRoute");
const variantRoute = require("./routes/variantRoute");


const cors = require("cors");

const app = express();
app.use(express.static("public"));
app.use(cors({ origin: "*" }));

const port = 3000;
try {
  connectDB();
  app.listen(port, () => {
    console.log(`App started on port ${port}`);
  });
} catch (error) {
  process.exit(1);
}
//Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use(fileUpload());

//Routes

app.use("/users", userRoute);
app.use("/userprofile", dashboardRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/reviews", ProductReviewRoute);
app.use("/cart", cartRoute);
app.use("/favorite", favoriteRoute);
app.use("/productdetails", productDetailsRoute);
app.use("/seller", sellerRoute);
app.use("/stores", storeRoute);
app.use("/orders", orderRoute);
app.use("/addresses", addressRoute);
app.use("/payments", paymentRoute);
app.use("/variants", variantRoute);
