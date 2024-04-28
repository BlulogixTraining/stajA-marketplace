import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductDetailNav from "../components/ProDetailNav/ProDetailNav";
const url = "https://staja-marketplace.onrender.com";
import classes from "./proudctDetail.module.css";
import Slider from "react-slick";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const Product = () => {
  const { auth } = useContext(AuthContext);
  const isAuthenticated = auth.isAuthenticated;
  console.log("isAuthenticated", isAuthenticated);
  console.log("isAuthenticated", auth.token);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/products/${productId}`);
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [productId]);

  return (
    <>
      <div className="container mb-4">
        <h4 className="text-center mt-5">Product Detail</h4>
        <div className="row ">
          <div className="col-md-6  mt-5 ">
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

          <div className="col-md-6">
            <div className={classes.product_detail}>
              <h2>{product?.product.name}</h2>
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
          </div>
        </div>
      </div>

      <section className="container mt-3 justify-content-center ">
        <ProductDetailNav />
      </section>
    </>
  );
};

export default Product;
