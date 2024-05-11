import classes from "./Cart.module.css";
import Summary from "../../components/ShopCart/Summary";
import ShopCart from "../../components/ShopCart/ShopCart";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Breadcrumbs from "../../components/ui/Breadcrumb";

const url = "https://staja-marketplace.onrender.com";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

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

  const handleRemoveClick = async (id) => {
    try {
      const response = await axios.post(`/cart/remove`, {
        product_id: id,
      });

      const newCart = cart.filter((product) => product._id !== id);
      setCart(newCart);
    } catch (error) {
      setError(error.response.data.message);
      console.error("Error fetching product:", error.response.data.message);
    }
  };
  return (
    <div className="container py-3 ">
      <Breadcrumbs />
      <h1 className={classes.cart_title}>Your Cart</h1>
      <div className="row d-flex justify-content-between mt-3">
        <div className="col d-flex flex-column gap-2  ">
          <ShopCart CartProdcut={cart} onRemoveClick={handleRemoveClick} />
        </div>
        <div className="col-md-4">
          <Summary />
        </div>
      </div>{" "}
    </div>
  );
};

export default Cart;
