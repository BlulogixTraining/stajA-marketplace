import { Avatar } from "@mui/material";
import classes from "./Testmonial.module.css";
import Slider from "react-slick";
import {
  deepOrange,
  green,
  lightBlue,
  pink,
  purple,
  teal,
} from "@mui/material/colors";

const Testmonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5 py-5 pb-5">
      <div>
        <h4 className={classes.testmonialTitle}>OUR HAPPY CUSTOMERS</h4>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <span className="d-flex align-items-start gap-2">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: purple[500],
                  }}
                  alt="Sarah"
                  src="/static/images/avatar/2.jpg"
                />
                <h5 className={classes.test_title}>Sarah</h5>
              </span>{" "}
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
              <div className={classes.overlay}></div>
            </div>
          </div>
          <div>
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <span className="d-flex align-items-start gap-2">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: deepOrange[500],
                  }}
                  alt="Jone"
                  src="/static/images/avatar/2.jpg"
                />
                <h5 className={classes.test_title}>John</h5>
              </span>{" "}
              <p className={classes.test_Text}>
                "The customer service is fantastic! They were very helpful and
                responsive. The products are of great quality too. Highly
                recommend Shop.co!”
              </p>
              <div className={classes.overlay}></div>
            </div>
          </div>
          <div>
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>

              <span className="d-flex align-items-start gap-2">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: teal[500],
                  }}
                  alt="Emily"
                  src="/static/images/avatar/2.jpg"
                />
                <h5 className={classes.test_title}>Emily</h5>
              </span>
              <p className={classes.test_Text}>
                "Shop.co has an amazing collection of stylish and trendy
                outfits. I love how versatile their clothing line is. I can
                always find something that suits my style.”
              </p>
              <div className={classes.overlay}></div>
            </div>
          </div>
          <div>
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <span className="d-flex align-items-start gap-2">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: green[500],
                  }}
                  alt="David"
                  src="/static/images/avatar/2.jpg"
                />
                <h5 className={classes.test_title}>David</h5>
              </span>{" "}
              <p className={classes.test_Text}>
                "The shopping experience on Shop.co is seamless and enjoyable.
                The website is easy to navigate, and the delivery is fast. I'm
                very satisfied with my purchases.”
              </p>
              <div className={classes.overlay}></div>
            </div>
          </div>
          <div>
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <span className="d-flex align-items-start gap-2">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: pink[500],
                  }}
                  alt="Laura"
                  src="/static/images/avatar/2.jpg"
                />
                <h5 className={classes.test_title}>Laura</h5>
              </span>{" "}
              <p className={classes.test_Text}>
                "I appreciate the variety of options available on Shop.co. From
                casual to formal wear, they have it all. The quality is
                exceptional, and the prices are reasonable.”
              </p>
              <div className={classes.overlay}></div>
            </div>
          </div>
          <div>
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <span className="d-flex align-items-start gap-2">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: lightBlue[500],
                  }}
                  alt="Sam"
                  src="/static/images/avatar/2.jpg"
                />
                <h5 className={classes.test_title}>Sam</h5>
              </span>{" "}
              <p className={classes.test_Text}>
                "Shop.co never disappoints! The products are exactly as
                described, and the quality is top-notch. I've recommended this
                site to all my friends and family.”
              </p>
              <div className={classes.overlay}></div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testmonials;
