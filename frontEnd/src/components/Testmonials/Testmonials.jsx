import classes from "./Testmonial.module.css";
import Slider from "react-slick";

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
    <div className="container mt-5  py-5 pb-5  ">
      <div>
        <h4 className={classes.testmonialTitle}>OUR HAPPY CUSTOMERS</h4>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            {" "}
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <h5 className={classes.test_title}>Sarah </h5>
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>{" "}
              <div className={classes.overlay}></div>
            </div>
          </div>
          <div>
            {" "}
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <h5 className={classes.test_title}>Sarah </h5>
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>{" "}
              <div className={classes.overlay}></div>
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <h5 className={classes.test_title}>Sarah </h5>
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>{" "}
              <div className={classes.overlay}></div>
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className={`${classes.box} shadow-sm border rounded-4 p-4`}>
              <span className={classes.test_rate}>&ldquo;</span>
              <h5 className={classes.test_title}>Sarah </h5>
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>{" "}
              <div className={classes.overlay}></div>
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className={`${classes.box} shadow-sm border rounded-4 p-4 `}>
              <span className={classes.test_rate}>&ldquo;</span>
              <h5 className={classes.test_title}>Sarah </h5>
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>{" "}
              <div className={classes.overlay}></div>
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className={`${classes.box} shadow-sm border rounded-4 p-4 `}>
              <span className={classes.test_rate}>&ldquo;</span>

              <h5 className={classes.test_title}>Sarah </h5>
              <p className={classes.test_Text}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
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
