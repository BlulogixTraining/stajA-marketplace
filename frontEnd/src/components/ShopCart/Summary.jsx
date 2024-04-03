import classes from "./ShopCart.module.css";
const Summary = () => {
  return (
    <div className="card rounded-2 boder boder-1 border-dark-subtle">
      <div className="card-body">
        <h4 className="card-title mb-4">Order Summary</h4>

        <div className="row">
          <div className={`${classes.order_sum_item} d-flex `}>
            <h6 className=" flex-fill  text-secondary ">Subtotal</h6>
            <p>$200</p>
          </div>
          <div className={`${classes.order_sum_item} d-flex `}>
            <h6 className=" flex-fill text-secondary ">Discount</h6>
            <p className="text-decoration-line-through text-danger">$10</p>
          </div>
          <div className={`${classes.order_sum_item} d-flex `}>
            <h6 className=" flex-fill text-secondary ">Delivery Fee</h6>
            <p>$10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
{
  /* <div className="row">
        <div className="col-6">Subtotal</div>
        <div className="col-6">$200</div>

        <div className="col-6">Shipping</div>
        <div className="col-6">$10</div>

        <div className="col-6">Tax</div>
        <div className="col-6">$20</div>

        <div className="col-6">Total</div>
        <div className="col-6">$230</div>

        <div className="col-12">
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div> */
}
