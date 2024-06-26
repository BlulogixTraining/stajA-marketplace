import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import RatingStarts from "../ui/RatingStarts";
const Card = ({ img, name, price, discount, productSlug, rating }) => {
  // console.log("productSlug", productSlug);
  return (
    <div
      className="product"
      style={{
        width: "14rem",
        margin: "0 auto",
      }}
    >
      <Link to={`/products/${productSlug}`} className="text-black">
        <div className={classes.imageBox}>
          <img src={img} alt="productImage" className="img-fluid" />
        </div>
        <div
          className={`${classes.details} d-flex  flex-column  justify-content-center  align-items-center gap-1`}
        >
          <RatingStarts star={rating} />
          <h5>{name}</h5>
          <div className={classes.prices}>
            <span className={classes.discount}>{`$${price}`}</span>
            <span> {`$${discount}`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
