import { Image } from "react-bootstrap";
import classes from "./Hero.module.css";
import hero1 from "../../assets/hero.jpg";
import Button from "../Button/Button";
import TextHero from "./TextHero";
import Svg from "./Svg";

const Hero = () => {
  return (
    <section
      className={`${classes.hero_background} container-fluid d-block  d-lg-flex justify-content-around align-items-center`}
    >
      <div className="col-12 col-lg-6 pt-3 pt-sm-0 text-center text-md-start">
        <h1 className={classes.hero_title}>
          FIND CLOTHES <br /> THAT MATCHES
          <br /> YOUR STYLE
        </h1>
        <p className={classes.hero_para}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="" Name={"Shop Now"}></Button>

        <div className="d-md-flex gap-3 pt-4">
          <TextHero Number={"2000+"} Text={"International Brands"} />
          <TextHero Number={"2000+"} Text={"High-Quality Products"} />
          <TextHero Number={"3000+"} Text={"Happy Customers"} />
        </div>
      </div>
      <div className="col-12 col-lg-3 pt-3 pt-md-0">
        <div className={classes.hero_image__box}>
          <span className={classes.svg1}>
            {" "}
            <Svg />
          </span>

          <Image src={hero1} alt="hero" className={classes.hero_image} />
          <span className={classes.svg2}>
            <Svg className={classes.svg1} />{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
