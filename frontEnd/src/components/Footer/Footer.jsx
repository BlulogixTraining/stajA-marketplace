import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import visa from "../../assets/1.png ";
// import master from "../../assets/2.png ";
// import paypal from "../../assets/3.png ";
// import amex from "../../assets/4.png ";
// import discover from "@/assets/5.png";

const Footer = () => {
  return (
    <div className={`${classes.footer_container}`}>
      <div
        className={`${classes.subscribe} container  bg-black p-5 rounded-4 `}
      >
        <div className="row ">
          <div className="col">
            <h1
              className={`
            ${classes.sub_title} text-white text-center text-lg-start `}
            >
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>
          <div className="col-lg-4 d-grid gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 px-4 rounded-5 bg-body-white shadow-lg"
            />
            <button className={classes.subButton}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div className="container">
          <div className="row align-content-start justify-content-between gap-5 gap-lg-0">
            <div className="col-lg-3">
              <h1 className={classes.footer_logo}>SHOP.CO</h1>
              <p className={classes.footer_sub_title}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>

              <div className="d-flex gap-3">
                <Link to="#" className={classes.social__icon_face}>
                  <FaFacebookF />{" "}
                </Link>
                <Link to="#" className={classes.social__icon_twit}>
                  <FaTwitter />
                </Link>
                <Link to="#" className={classes.social__icon_insta}>
                  <FaInstagram />
                </Link>
                <Link to="#" className={classes.social__icon_git}>
                  <FaGithub />{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-2 d-flex  flex-column gap-3 ">
              <h3 className={classes.footer__company}>COMPANY</h3>
              <Link className={classes.footer__links}>About </Link>
              <Link className={classes.footer__links}>Features</Link>
            </div>
            <div className="col-lg-2 d-flex  flex-column gap-3 ">
              <h3 className={classes.footer__company}>HELP</h3>
              <Link className={classes.footer__links}>Customer Support </Link>
              <Link className={classes.footer__links}>Delivery Details</Link>
            </div>{" "}
            <div className="col-lg-2 d-flex  flex-column gap-3 ">
              <h3 className={classes.footer__company}>FAQ</h3>
              <Link className={classes.footer__links}>Orders</Link>
              <Link className={classes.footer__links}>Payments</Link>
            </div>
            <div className="col-lg-2 d-flex  flex-column gap-3 ">
              <h3 className={classes.footer__company}>Resources</h3>
              <Link className={classes.footer__links}>Terms & Conditions</Link>
              <Link className={classes.footer__links}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.footer__bottom} bg-tertiary `}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className={classes.footer__copy}>
                &copy; 2024 Shop.co. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <p className={classes.footer__copy}>
                Made with <span className={classes.heart}>❤</span> by{" "}
                <Link to="#" className={classes.footer__copy__link}>
                  Shop.co
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
