import classes from "./Cart.module.css";
import Summary from "../../components/ShopCart/Summary";
import ShopCart from "../../components/ShopCart/ShopCart";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const url = "https://staja-marketplace.onrender.com";
const Cart = () => {
  const [cart, setCart] = useState([]);
  // fetch the cart data

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${url}/cart/get`);
        setCart(response.data.cart);
        console.log("cart", response.data.cart);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);

  return (
    <div className="container py-3">
      <h1 className={classes.cart_title}>Your Cart</h1>
      <div className="row d-flex justify-content-between mt-5">
        <div className="col d-flex flex-column gap-2  ">
          <ShopCart CartProdcut={cart} />
        </div>
        <div className="col-md-4">
          <Summary />
        </div>
      </div>{" "}
    </div>
  );
};

export default Cart;
