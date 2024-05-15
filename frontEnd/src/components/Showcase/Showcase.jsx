import classes from "./Showcase.module.css";
import Card from "../Card/Card";
const url = "https://staja-marketplace.onrender.com";

const Showcase = ({ products, Showtitle }) => {
  if (!products) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container text-center mt-5  ">
      <h1 className={classes.title}>{Showtitle}</h1>
      <div className="row justify-content-center gap-5 gap-lg-3 mt-5">
        {products.map((product) => (
          <Card
            rating={product.averagerating}
            productSlug={product.slug}
            key={product._id}
            name={product.name}
            img={`${url}${product.image[0]}`}
            price={product.price}
            discount={product.discount}
          />
        ))}
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
