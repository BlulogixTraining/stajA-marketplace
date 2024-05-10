import { Link } from "react-router-dom";
import classes from "./Card.module.css";
const Card = ({ img, name, price, discount, productSlug }) => {
  console.log("productSlug", productSlug);
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
        <div className={classes.details}>
          <h5>{name}</h5>
          <div className={classes.prices}>
            <span>{`$${price}`}</span>
            <span className={classes.discount}> {`$${discount}`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
