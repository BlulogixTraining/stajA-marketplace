import classes from "./Cart.module.css";
import Summary from "../../components/ShopCart/Summary";
import ShopCart from "../../components/ShopCart/ShopCart";
const Cart = () => {
  return (
    <div className="container py-3">
      <h1 className={classes.cart_title}>Your Cart</h1>
      <div className="row d-flex justify-content-between mt-5">
        <div className="col">
          <ShopCart />
        </div>
        <div className="col-md-4">
          <Summary />
        </div>
      </div>{" "}
    </div>
  );
};

export default Cart;
