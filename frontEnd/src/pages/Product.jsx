import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductDetailNav from "../components/ProDetailNav/ProDetailNav";
const url = "https://staja-marketplace.onrender.com";
import classes from "./proudctDetail.module.css";
import Slider from "react-slick";
import RatingStarts from "../components/ui/RatingStarts";
import CustomButton from "../components/ui/CustomButton";
import Breadcrumbs from "../components/ui/Breadcrumb";
import axios from "../api/axios";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const Product = () => {
  // is authenticated
  const isAuthenticated = useIsAuthenticated();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const [reviews, setReviews] = useState([]);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [rateId, setRateId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [varint, setVarint] = useState(null);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/products/${productId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setVarint(data.productvariant);
        console.log("data.productvariant", data.productvariant);
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

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(`/cart/add`, {
        product_id: rateId,
      });
      console.log("response", response);
      setSuccess("Product added to cart successfully");
      setTimeout(() => {
        setSuccess(null);
      }, 5000);
    } catch (error) {
      setError(error.response.data.message);

      console.error("Error fetching product:", error.response.data.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`/favorite/add`, {
        product_id: rateId,
      });
      setSuccess("Product added to wishlist successfully");
      console.log("response", response);
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);

      console.error("Error fetching product:", error.response.data.message);
      setTimeout(() => {
        setError(null);
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  return (
    <>
      <div className="container mb-4">
        <Breadcrumbs />
        <div className="row  align-content-start gap-1 pt-2">
          <div className="col-md-5  ">
            <div className={`${classes.slider_container} slider-container `}>
              <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
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
                ref={(slider) => (sliderRef2 = slider)}
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
              <RatingStarts star={rating} />
              <div className={classes.detail_price}>
                <h4 className={classes.orignal_price}>
                  ${product?.product.price}
                </h4>
                <h4 className={classes.desc_price}>
                  ${product?.product.discount}
                </h4>
                <p>%50</p>
              </div>
              <p>{product?.product.description}</p>
              <h5>Stock: {product?.product.stock}</h5>
            </div>
            <div className={classes.add_to_cart}>
              <h5 className="pt-4">Choose Size</h5>
              <div className="d-flex gap-2 pt-3"></div>

              <div className="d-flex gap-2 pt-3 ">
                <CustomButton
                  width={"100%"}
                  // isActive={true}
                  title="Add to cart"
                  color="black"
                  onClick={handleButtonClick}
                />
                <CustomButton
                  width={"40%"}
                  // isActive={true}

                  title="Add to wishlist"
                  color="black"
                  onClick={handleAddToCart}
                />
              </div>

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

      <section className="container mt-3 justify-content-center ">
        <ProductDetailNav reviews={reviews} ratedId={rateId} />
      </section>
    </>
  );
};

export default Product;
