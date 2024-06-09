import classes from "./About.module.css";

import metion from "../../public/mission-awpem.png";
import pc from "../../public/cards.webp";
import pc2 from "../../public/Fast-delivery.png";
import pc3 from "../../public/Quality-Stamp.png";
const About = () => {
  return (
    <div className="">
      <div className={`${classes.hero}`}>Welcome to Shopco</div>
      <div className="container mt-3">
        <p className={classes.about}>
          At Shopco, we're passionate about providing our customers with the
          best shopping experience possible. Founded in 1999, we set out with a
          mission to revolutionize online shopping by offering high-quality
          products, excellent customer service, and a seamless shopping journey.
        </p>
      </div>
      <div className="container mt-5">
        <h1 className={classes.title}>Our Goles</h1>
        <div className="row d-block gap-4 d-md-flex mt-5">
          <div
            className={` ${classes.cards} col mb-4 d-block  d-lg-flex align-items-center justify-content-center gap-3 `}
          >
            <div className={`${classes.imgrap} col-lg-4`}>
              <img src={metion} className="img-fluid" alt="image" />
            </div>

            <p>
              Exceptional Quality: We are committed to offering only the highest
              quality products from trusted brands. Every item in our collection
              undergoes rigorous testing to ensure durability, functionality,
              and value.
            </p>
          </div>{" "}
          <div
            className={` ${classes.cards} col mb-4 d-block  d-lg-flex align-items-center justify-content-center gap-3 `}
          >
            <div className={`${classes.imgrap} col-lg-4`}>
              <img src={pc} className="img-fluid" alt="image" />
            </div>

            <p>
              Exceptional Quality: We are committed to offering only the highest
              quality products from trusted brands. Every item in our collection
              undergoes rigorous testing to ensure durability, functionality,
              and value.
            </p>
          </div>
        </div>{" "}
        <div className="row d-block gap-4 d-md-flex mt-5">
          <div
            className={` ${classes.cards} col mb-4 d-block  d-lg-flex align-items-center justify-content-center gap-3 `}
          >
            <div className={`${classes.imgrap} col-lg-4`}>
              <img src={pc2} className="img-fluid" alt="image" />
            </div>

            <p>
              We understand the importance of timely delivery. That's why we've
              streamlined our shipping process to ensure your orders reach you
              quickly and securely.
            </p>
          </div>{" "}
          <div
            className={` ${classes.cards} col mb-4 d-block  d-lg-flex align-items-center justify-content-center gap-3 `}
          >
            <div className={`${classes.imgrap} col-lg-4`}>
              <img src={pc3} className="img-fluid" alt="image" />
            </div>

            <p>
              We prioritize quality above all else. From our meticulous
              craftsmanship to our carefully selected materials, we ensure that
              each product meets our rigorous standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
