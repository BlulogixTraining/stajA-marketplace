import { RiDeleteBin5Fill } from "react-icons/ri";
import classes from "./ShopCart.module.css";

const url = "https://staja-marketplace.onrender.com";
const ShopCart = ({ CartProdcut, onRemoveClick }) => {
  const cartData = CartProdcut;
  console.log("cartData", cartData);
  return (
    <div className="contianer">
      <div className="row">
        <div className="d-flex flex-column gap-2">
          {cartData?.map((product) => (
            <div
              key={product._id}
              className="box d-flex gap-3 border border-1 border-dark-subtle p-3 rounded-4"
            >
              <div className={classes.cart_img_box}>
                <img
                  src={`${url}${product.image[0]}`}
                  alt={product.name}
                  className="rounded img-fluid"
                />
              </div>
              <div className="flex-fill">
                <div className="container text-center">
                  <div className="row">
                    <div className="p-0 d-flex align-items-start">
                      <h4 className="text-capitalize fw-bold w-100 d-flex justify-content-start">
                        {product.name}
                      </h4>
                      <a
                        onClick={() => onRemoveClick(product._id)}
                        style={{ cursor: "pointer" }}
                        className=" text-decoration-line-through text-danger d--inline-flex justify-content-end fs-5"
                      >
                        <RiDeleteBin5Fill />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-capitalize fw-lighter m-0">
                  <b>Size:</b> Large
                </p>
                <p className="text-capitalize fw-lighter">
                  <b>Color:</b> blue
                </p>
                <div className="d-flex">
                  <h4 className="flex-fill fw-bold text-capitalize">
                    ${product.price}
                  </h4>{" "}
                  <div className="d-flex gap-2 bg-light justify-content-center align-items-center rounded-5">
                    <button className="btn btn-light rounded-5 text-dark fs-5 fw-bold">
                      -
                    </button>
                    <span className="fw-bold">1</span>
                    <button className="btn btn-light rounded-5 fs-5 fw-bold">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
