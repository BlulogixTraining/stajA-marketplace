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
import { FaExclamationCircle } from "react-icons/fa";
import Card from "../components/Card/Card";
import { set } from "react-hook-form";

const Product = () => {
  const isAuthenticated = useIsAuthenticated();
  const { addToCart, errorCart, successCart } = useContext(CartContext);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [variants, setVariants] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [seller, setSeller] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const url = "https://staja-marketplace.onrender.com";

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/products/${productId}`);

        const data = await response.json();
        console.log("variants1", data);
        setSeller(data.product.seller);
        setVariants(data.product.variants);
        setProduct(data);
        setIsLoading(false);
        setRating(data.averagerating);
        setReviews(data.reviews);
        setProductDetails(data.product.details);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [productId]);

  useEffect(() => {
    const fetchRealtedProdcuts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/products`);
        response.data.products.sort(() => Math.random() - 0.5);
        response.data.products.splice(4);
        setRelatedProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchRealtedProdcuts();
  }, [productId]);

  const handleAddToCart = async (id) => {
    await addToCart(id);
  };

  const handleAddToWishlist = async (id) => {
    if (isAuthenticated) {
      try {
        const response = await axios.post(`/favorite/add/`, {
          product_id: id,
        });
        setSuccess(response.data.message);
        console.log("response.data.message", response.data.message);
        setTimeout(() => {
          setSuccess(null);
        }, 2000);
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    } else {
      setError("Please login to add to wishlist");
    }
  };

  const handleVariantSelection = (key, variant) => {
    setSelectedVariants((prevState) => ({
      ...prevState,
      [key]: prevState[key] === variant ? null : variant,
    }));
  };
  console.log("details", productDetails);
  return (
    <>
      <div className="container mb-4">
        <Breadcrumbs />
        <div className="row align-content-start gap-1 pt-2">
          <div className="col-md-5">
            <div className={`${classes.slider_container} slider-container`}>
              <Slider asNavFor={sliderRef2.current} ref={sliderRef1}>
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
                asNavFor={sliderRef1.current}
                ref={sliderRef2}
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
              <div className="d-flex justify-content-between ">
                <RatingStarts star={rating} />
                <span
                  style={{
                    color: "#4279eb",
                    cursor: "pointer",
                  }}
                  className="border border-1 p-2 d-flex align-items-center gap-2"
                >
                  <Link
                    className="fs-5 "
                    to={`/store/${product?.product?.seller?.sellerSlug}`}
                  >
                    <h6 className="m-0">
                      Store: {product?.product?.seller?.name}
                    </h6>
                  </Link>
                  <FaExclamationCircle />
                </span>
              </div>
              <div className={classes.detail_price}>
                <h4 className={classes.orignal_price}>
                  ${product?.product.price}
                </h4>
                <h4 className={classes.desc_price}>
                  ${product?.product.discount}
                </h4>
                <p className="m-0">%50</p>
              </div>
              <p>{product?.product.description}</p>
              <h5>Stock: {product?.product.stock}</h5>
            </div>
            <div className={classes.add_to_cart}>
              <div className="d-flex gap-2 ps-2 mt-3">
                {variants &&
                  variants.map((variantObj) => {
                    const category = variantObj.category_id.category;
                    const values = variantObj.values;

                    if (values.length > 0) {
                      if (category === "Colors") {
                        return (
                          <div key={category} className="">
                            <h5>{category}</h5>
                            <div className="btn-group d-flex gap-2">
                              {values.map((variant) => (
                                <button
                                  key={variant}
                                  type="button"
                                  className={`rounded-5 p-3 btn ${
                                    selectedVariants[category] === variant
                                      ? "btn-dark"
                                      : "btn-outline-warning"
                                  }`}
                                  onClick={() =>
                                    handleVariantSelection(category, variant)
                                  }
                                  style={{
                                    backgroundColor: variant || "blue",
                                  }}
                                ></button>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={category} className="mx-2">
                            <h5>{category}</h5>
                            <div className="btn-group d-flex gap-2">
                              {values.map((variant) => (
                                <button
                                  key={variant}
                                  type="button"
                                  className={`rounded-5 btn ${
                                    selectedVariants[category] === variant
                                      ? "btn-dark"
                                      : "btn-outline-dark"
                                  }`}
                                  onClick={() =>
                                    handleVariantSelection(category, variant)
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

              <div className="d-flex gap-2 pt-3">
                <CustomButton
                  width={"100%"}
                  title="Add to cart"
                  color="black"
                  onClick={() => handleAddToCart(product.product?._id)}
                />
                <CustomButton
                  width={"40%"}
                  title="Add to wishlist"
                  color="black"
                  onClick={() => handleAddToWishlist(product.product?._id)}
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

              {success && (
                <div className="alert alert-success mt-2" role="alert">
                  {success}
                </div>
              )}

              {error && (
                <div className="alert alert-danger mt-2" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-3 justify-content-center">
        <ProductDetailNav
          productDetails={productDetails}
          reviews={reviews}
          ratedId={productId}
        />
      </section>

      <section className="container mt-3 text-center p-4 border border-top-1 ">
        <h2>Related Products</h2>

        <div className="row">
          <div className="col d-flex flex-wrap justify-content-center justify-content-lg-start mt-3 mt-md-0 gap-4 gap-md-0   ">
            {relatedProducts.map((product) => (
              <div
                key={product._id}
                className={`col col-md-5 gap-md-6 col-lg-3 mt-3 mb-5 position-relative `}
              >
                <Card
                  productSlug={product.slug}
                  name={product.name}
                  rating={product.averagerating}
                  img={`${url}${product.image[0]}`}
                  price={product.price}
                  discount={product.discount}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
