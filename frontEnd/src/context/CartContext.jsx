import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [errorCart, setErrorCart] = useState(null);
  const [successCart, setSuccessCart] = useState(null);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`/cart/get`);
      setCart(response.data.cart);
      setCartTotal(response.data.orderSummary);
      setTotalProducts(response.data.totalItems);
      console.log("cart", response.data.orderSummary);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemoveClick = async (id) => {
    try {
      await axios.post(`/cart/remove`, {
        product_id: id,
      });
      fetchCart();
      setSuccessCart("Product removed from cart successfully");
      setTimeout(() => setSuccessCart(null), 2000); // Clear success message after 2 seconds
    } catch (error) {
      setErrorCart(error.response.data.message);
      setTimeout(() => setErrorCart(null), 2000); // Clear error message after 2 seconds
      console.error("Error removing product:", error.response.data.message);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axios.post(`/cart/add`, {
        product_id: productId,
      });
      fetchCart();
      setSuccessCart("Product added to cart successfully");
      setTimeout(() => setSuccessCart(null), 2000);
    } catch (error) {
      setErrorCart(error.response.data.message);
      setTimeout(() => setErrorCart(null), 2000);
      console.error(
        "Error adding product to cart:",
        error.response.data.message
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        totalProducts,
        handleRemoveClick,
        addToCart,
        errorCart,
        successCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
