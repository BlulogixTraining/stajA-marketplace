import Slider from "react-slick";
import logos from "./logos";
import classes from "./HeroSlider.module.css";
const HeroSlider = () => {
  const settings = {
    dots: false,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className={classes.slider}>
        <div className={classes.slider_box}>
          <img src={logos[6]} alt="logo" />
        </div>
        <div className={classes.slider_box}>
          <img src={logos[5]} alt="logo" />{" "}
        </div>
        <div className={classes.slider_box}>
          <img src={logos[6]} alt="logo" />{" "}
        </div>{" "}
        <div className={classes.slider_box}>
          <img src={logos[5]} alt="logo" />{" "}
        </div>{" "}
        <div className={classes.slider_box}>
          <img src={logos[6]} alt="logo" />{" "}
        </div>{" "}
        <div className={classes.slider_box}>
          <img src={logos[5]} alt="logo" />{" "}
        </div>{" "}
      </Slider>
    </div>
  );
};

export default HeroSlider;
