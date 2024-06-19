import { useEffect, useState, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductDetailNav from "../components/ProDetailNav/ProDetailNav";
import RatingStarts from "../components/ui/RatingStarts";
import CustomButton from "../components/ui/CustomButton";
import Breadcrumbs from "../components/ui/Breadcrumb";
import axios from "../api/axios";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { CartContext } from "../context/CartContext";
import classes from "./proudctDetail.module.css";

const Product = () => {
  const isAuthenticated = useIsAuthenticated();
  const { addToCart, errorCart, successCart } = useContext(CartContext);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [reviews, setReviews] = useState([]);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [rateId, setRateId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [variants, Setvariants] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});

  const url = "https://staja-marketplace.onrender.com";

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        Setvariants(data.variants_available);
        console.log("data.productvariant", data);
        setProduct(data);
        setIsLoading(false);
        setRating(data.averagerating);
        setReviews(data.reviews);
        setRateId(data.product._id);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [productId]);

  const handleAddToCart = async () => {
    await addToCart(rateId);
  };
  console.log(error);
  console.log(success);
  // handleAddToWishlist function remains unchanged

  const handleVariantSelection = (key, variant) => {
    setSelectedVariants((prevState) => ({
      ...prevState,
      [key]: prevState[key] === variant ? null : variant,
    }));
  };

  return (
    <>
      <div className="container mb-4">
        <Breadcrumbs />
        <div className="row  align-content-start gap-1 pt-2">
          <div className="col-md-5  ">
            <div className={`${classes.slider_container} slider-container `}>
              <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1.current = slider)}
              >
                {product?.product.image.map((imageUrl, index) => (
                  <div key={index} className={classes.big_detail_img}>
                    <img
                      src={`https://staja-marketplace.onrender.com${imageUrl}`}
                      alt="product"
                    />
                  </div>
                ))}
              </Slider>
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2.current = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                {product?.product.image.map((imageUrl, index) => (
                  <div key={index} className={classes.small_detail_img}>
                    <img
                      src={`https://staja-marketplace.onrender.com${imageUrl}`}
                      alt="product"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={classes.product_detail}>
              <h2>{product?.product.name}</h2>
              <div className=" d-flex justify-content-between">
                <RatingStarts star={rating} />
                <Link
                  className=" fs-5 text-black"
                  to={`/store/${product?.product.slug}`}
                >
                  Store: {product?.product.stock}
                </Link>
              </div>
              <div className={classes.detail_price}>
                <h4 className={classes.orignal_price}>
                  ${product?.product.price}
                </h4>
                <h4 className={classes.desc_price}>
                  ${product?.product.discount}
                </h4>
                <p className=" m-0">%50</p>
              </div>
              <p>{product?.product.description}</p>
              <h5>Stock: {product?.product.stock}</h5>
            </div>
            <div className={classes.add_to_cart}>
              <div className="d-flex gap-2 ps-2 mt-3">
                {variants &&
                  Object.entries(variants).map(([key, value]) => {
                    if (value.length > 0) {
                      if (key === "Colors") {
                        return (
                          <div key={key} className="">
                            <h5>{key}</h5>
                            <div className="btn-group d-flex gap-2">
                              {value.map((variant) => (
                                <button
                                  key={variant}
                                  type="button"
                                  className={`rounded-5 p-3 btn ${
                                    selectedVariants[key] === variant
                                      ? "btn-dark"
                                      : "btn-outline-warning"
                                  }`}
                                  onClick={() =>
                                    handleVariantSelection(key, variant)
                                  }
                                  style={{ backgroundColor: variant || "blue" }}
                                ></button>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={key} className="mx-2">
                            <h5>{key}</h5>
                            <div className="btn-group d-flex gap-2">
                              {value.map((variant) => (
                                <button
                                  key={variant}
                                  type="button"
                                  className={`rounded-5  btn ${
                                    selectedVariants[key] === variant
                                      ? "btn-dark"
                                      : "btn-outline-dark"
                                  }`}
                                  onClick={() =>
                                    handleVariantSelection(key, variant)
                                  }
                                >
                                  {variant}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    }
                    return null;
                  })}
              </div>

              <div className="d-flex gap-2 pt-3 ">
                <CustomButton
                  width={"100%"}
                  title="Add to cart"
                  color="black"
                  onClick={handleAddToCart}
                />
                <CustomButton
                  width={"40%"}
                  title="Add to wishlist"
                  color="black"
                />
              </div>

              {successCart && (
                <div className="alert alert-success mt-2" role="alert">
                  {successCart}
                </div>
              )}
              {errorCart && (
                <div className="alert alert-danger mt-2" role="alert">
                  {errorCart}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-3 justify-content-center ">
        <ProductDetailNav reviews={reviews} ratedId={rateId} />
      </section>
    </>
  );
};

export default Product;
