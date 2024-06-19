import { useContext } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/ui/Breadcrumb";
import Summary from "../../components/ShopCart/Summary";
import ShopCart from "../../components/ShopCart/ShopCart";
import { CartContext } from "../../context/CartContext";
import classes from "./Cart.module.css";

const Cart = () => {
  const { cart, cartTotal, handleRemoveClick } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="container py-3 ">
        <Breadcrumbs />
        <h1 className={classes.cart_title}>Your Cart</h1>
        <div className="row d-flex justify-content-between mt-3">
          <div className="col d-flex flex-column gap-2  ">
            <h3 className="text-center">Your cart is empty</h3>
            <div className="d-flex justify-content-center">
              <Link to="/products" className="btn btn-secondary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container py-3 ">
      <Breadcrumbs />
      <h1 className={classes.cart_title}>Your Cart</h1>
      <div className="row d-flex justify-content-between mt-3">
        <div className="col d-flex flex-column gap-2  ">
          <ShopCart CartProdcut={cart} onRemoveClick={handleRemoveClick} />
        </div>
        <div className="col-md-4">
          <Summary CartSummary={cartTotal} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
