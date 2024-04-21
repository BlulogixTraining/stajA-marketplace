import classes from "./Showcase.module.css";
import Card from "../Card/Card";

const Showcase = ({ title, img, price, discount, headtitle }) => {
  return (
    <div className="container text-center mt-5  ">
      <h1 className={classes.title}>{headtitle}</h1>

      <div className="row justify-content-center gap-5 gap-lg-3 mt-5">
        <Card img={img} title={title} price={price} discount={discount} />{" "}
        <Card img={img} title={title} price={price} discount={discount} />{" "}
        <Card img={img} title={title} price={price} discount={discount} />{" "}
        <Card img={img} title={title} price={price} discount={discount} />{" "}
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg shadow mt-4 px-5 py-2 shadow p-3 mb-5 bg-body-tertiary rounded"
      >
        <a
          href="/products"
          className="text-black text-decoration-none fw-normal"
        >
          View all
        </a>
      </button>
    </div>
  );
};

export default Showcase;
