import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductDetailNav from "../components/ProDetailNav/ProDetailNav";
const url = "https://staja-marketplace.onrender.com";
import classes from "./proudctDetail.module.css";
import Slider from "react-slick";

import RatingStarts from "../components/ui/RatingStarts";
import CustomButton from "../components/ui/CustomButton";
import Breadcrumbs from "../components/ui/Breadcrumb";
const Product = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  //store the reviews
  const [reviews, setReviews] = useState([]);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
        setRating(data.averagerating);
        setReviews(data.reviews);
        console.log(data.averagerating);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [productId]);
  const handleButtonClick = () => {
    console.log("Add to cart");
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
              <RatingStarts star={product?.averagerating} />
              <div className={classes.detail_price}>
                <h4 className={classes.orignal_price}>
                  ${product?.product.price}
                </h4>
                <h4 className={classes.desc_price}>
                  ${product?.product.discount}%
                </h4>
                <p>%50</p>
              </div>
              <p>{product?.product.description}</p>
              <h5>Stock: {product?.product.stock}</h5>
            </div>
            <div className={classes.add_to_cart}>
              <h5 className="pt-4">Choose Size</h5>

              <div className={`${classes.size} d-flex gap-2 mt-3 `}>
                <CustomButton
                  title="Large"
                  color="#F0F0F0"
                  onClick={handleButtonClick}
                  style={{
                    borderRadius: "50%",
                    padding: "15px 20px ",
                  }}
                />
                <CustomButton
                  title="X-Large"
                  color="#F0F0F0"
                  onClick={handleButtonClick}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-3 justify-content-center ">
        <ProductDetailNav reviews={reviews} />
      </section>
    </>
  );
};

export default Product;
