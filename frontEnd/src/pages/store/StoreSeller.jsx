import { FaCircleCheck } from "react-icons/fa6";
import classes from "./StoreSeller.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaStoreAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Card from "../../components/Card/Card";
import RatingStarts from "../../components/ui/RatingStarts";

const StoreSeller = () => {
  //get params from url
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const [review, setReview] = useState([]);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await axios.get(`/seller/details/${slug}`);
        setProduct(response.data.productsOfSeller);
        setSellerData(response.data.seller);
        setReview(response.data.reviews);
      };
      setLoading(false);
      fetchData();
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  }, [slug]);
  console.log("prossdssssssuct", review);

  const sellerimg = sellerData?.image
    ? `https://staja-marketplace.onrender.com/${sellerData.image}`
    : "https://via.placeholder.com/150";
  const url = "https://staja-marketplace.onrender.com";
  return (
    <div className="container-fluid">
      <div className="container mt-3 ">
        <div className={`row  ${classes.storeHero}  `}>
          <div
            className={`bg d-flex d-md-flex col-lg-6 py-2 align-items-center gap-3  ${classes.content}`}
          >
            <div
              className="overflow-hidden d-none d-md-block"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid  #787171",
              }}
            >
              <img
                src={sellerimg}
                alt="store"
                className="img-fluid rounded-circle object-fit-cover w-100 h-100"
              />
            </div>
            <div className="d-flex align-items-center flex-column  ">
              <span className="d-flex align-items-center gap-3 ">
                <h3 className="text-center m-0 p-0">{sellerData?.name} </h3>
                <FaCircleCheck className="text-primary" />
              </span>
              <span className="text-center"> {sellerData?.email}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-primary">4.5</span>
              <p className="text-dark fs-5">Rating</p>
            </div>
          </div>
        </div>

        <div className="row">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <h2 className="text-center">Welcome to {sellerData?.name}</h2>
              <div className="row mt-5">
                {product.map((product) => (
                  <div
                    key={product._id}
                    className={`col col-md-5 gap-md-6 col-lg-3 mb-5 position-relative `}
                  >
                    {/* <span className={`heart-icon ${classes.favorite_heart}`}>
                    <WishlistHeart productId={product._id} />
                  </span> */}
                    <Card
                      productSlug={product.slug}
                      name={product.name}
                      rating={product.averageRating}
                      img={`${url}${product.image[0]}`}
                      price={product.price}
                      discount={product.discount}
                    />{" "}
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <div className="row d-flex gap-2 justify-content-center">
                <div className="col-lg-5 d-flex gap-4 p-3 border border-1 rounded-3  align-items-center">
                  <span
                    style={{
                      backgroundColor: "#d9dac7a8",
                      color: "var(--light)",
                      padding: "1rem",
                      borderRadius: "50%",
                    }}
                  >
                    <FaStoreAlt
                      style={{
                        fontSize: "2rem",
                      }}
                    />
                  </span>

                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-center">Duration at Shopcoo </h5>
                    <h6>2 years</h6>
                  </div>
                </div>{" "}
                <div className="col-lg-5 d-flex gap-4 p-3 border border-1 rounded-3  align-items-center">
                  <span
                    style={{
                      backgroundColor: "#d9dac7a8",
                      color: "var(--light)",
                      padding: "1rem",
                      borderRadius: "50%",
                    }}
                  >
                    <FaLocationDot
                      style={{
                        fontSize: "2rem",
                        color: "var(--primary)",
                      }}
                    />
                  </span>

                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-center">Location</h5>
                    <h6>Istanbul</h6>
                  </div>
                </div>{" "}
                <div className="col-lg-5 d-flex gap-4 p-3 border border-1 rounded-3  align-items-center">
                  <span
                    style={{
                      backgroundColor: "#d9dac7a8",
                      color: "var(--light)",
                      padding: "1rem",
                      borderRadius: "50%",
                    }}
                  >
                    <FaMoneyBills
                      style={{
                        fontSize: "2rem",
                      }}
                    />
                  </span>

                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-center">Corporate Invoice</h5>
                    <h6>Suitable</h6>
                  </div>
                </div>{" "}
                <div className="col-lg-5 d-flex gap-4 p-3 border border-1 rounded-3  align-items-center">
                  <span
                    style={{
                      backgroundColor: "#d9dac7a8",
                      color: "var(--light)",
                      padding: "1rem",
                      borderRadius: "50%",
                    }}
                  >
                    <FaMoneyBills
                      style={{
                        fontSize: "2rem",
                      }}
                    />
                  </span>

                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-center">Corporate Invoice</h5>
                    <h6>Suitable</h6>
                  </div>
                </div>{" "}
              </div>

              <div className="row mt-5">
                <div className="col-12">
                  <h4 className="text-center border-top pt-4">Store Reviews</h4>
                  <div className="row">
                    {review.map((review) => (
                      <div key={review._id} className="col-12 col-md-6  mt-3">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <span>
                                <span className="d-flex align-items-center gap-2">
                                  <FaCircleCheck className="text-primary" />
                                  <RatingStarts star={review.rating} />
                                </span>

                                <p className="fs-5">
                                  {" "}
                                  {review.user_id.name &&
                                    review.user_id.name
                                      .split("")
                                      .map((letter, index) => {
                                        if (index < 3) {
                                          return letter;
                                        } else {
                                          return "*";
                                        }
                                      })}
                                </p>
                                <p>{review.createdAt}</p>
                              </span>

                              <h5 className="card-title">{review.name}</h5>
                            </div>
                            <p className="card-text">{review.review}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <div className="row">
                <div className="location">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.7255790423!2d28.731987!3d41.0054958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabaecdea9e0b1%3A0xfce55e0d7c39a6cf!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1628535694579!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>

                <div className="col-12 mt-4">
                  <h5 className="text-center">Contact Us</h5>
                  <form className=" col-8 mx-auto">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Enter subject"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`btn btn-dark btn-block mt-2 py-2 fs-5 ${classes.btnDarkCustom}`}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default StoreSeller;
