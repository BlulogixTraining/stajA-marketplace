import classes from "./productreview.module.css";
import RatingStarts from "../ui/RatingStarts";
const ProductReview = ({ Name, desc, star, date, reviews }) => {
  const reviews1 = reviews || [];

  return (
    <>
      {reviews1.map((review) => (
        <div
          key={review._id}
          className={`col col-sm-6 ${classes.productReview}`}
        >
          <div className="d-flex flex-column gap-2">
            <RatingStarts star={review.rating} />
            <h5>{review.user_id.name}</h5>
          </div>
          <div className="mt-2">
            <p className={classes.text_reviw}>{review.review}</p>
            <p>{new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProductReview;
