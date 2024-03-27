import Slider from "react-slick";
import brands from "./brands";
import classes from "./HeroSlider.module.css";
const HeroSlider = () => {
  const settings = {
    className: "slider variable-width",
    variableWidth: true,
    dots: true,
    infinite: true,
    cssEase: "linear",
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="slider-container">
      <Slider {...settings} className={classes.slider1}>
        <div className={classes.slider_box} style={{ width: 250 }}>
          <img src={brands[1]} alt="logo" />
        </div>
        <div className={classes.slider_box} style={{ width: 250 }}>
          <img src={brands[2]} alt="logo" />
        </div>
        <div className={classes.slider_box} style={{ width: 250 }}>
          <img src={brands[3]} alt="logo" />
        </div>
        <div className={classes.slider_box} style={{ width: 250 }}>
          <img src={brands[4]} alt="logo" />
        </div>
        <div className={classes.slider_box} style={{ width: 250 }}>
          <img src={brands[0]} alt="logo" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
