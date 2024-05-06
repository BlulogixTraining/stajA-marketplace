import classes from "./ShopCart.module.css";
import { MdOutlineDiscount } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
const Summary = () => {
  return (
    <div className="card rounded-4 boder boder-1 border-dark-subtle p-2">
      <div className="card-body">
        <h4 className="card-title mb-4"><b>Order Summary</b></h4>

        <div className="row">
          <div className={`${classes.order_sum_item} d-flex `}>
            <h5 className=" flex-fill  text-secondary fw-light">Subtotal</h5> 
            <h5><b>$200</b></h5>
          </div>
          <div className={`${classes.order_sum_item} d-flex `}>
            <h5 className=" flex-fill text-secondary fw-light">Discount</h5>
            <h5 className="text-decoration-line-through text-danger"><b>$10</b></h5>
          </div>
          <div className={`${classes.order_sum_item} d-flex `}>
            <h5 className=" flex-fill text-secondary fw-light">Delivery Fee</h5>
            <h5><b>$200</b></h5>
          </div>
        <hr />
        <div className={`${classes.order_sum_item} d-flex `}>
            <h5 className=" flex-fill text-secondary fw-light"> <b>Total</b></h5>
            <h4><b>$400</b></h4>
          </div>
          
    <div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="input-group">
    <span className="input-group-text" id="btnGroupAddon2">
      <MdOutlineDiscount />
    </span>
    <input type="text" className="form-control flex-1"
     placeholder="Add promo code" 
     aria-label="Input group example" 
     aria-describedby="btnGroupAddon2"/>
    <button type="button" className="btn btn-dark ">Apply</button>

    </div>
    </div>
   
  </div>
  <div className="row mt-3">
    <div className="col">
    <button type="button" className="btn btn-dark w-100 p-2">Go to Checkout <FaArrowRight /></button>
    </div>
  </div>
</div>

  



          
          {/* <p className="d-inline-flex gap-1">
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Add promo code 
  </a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Apply
  </button>
</p> */}

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
