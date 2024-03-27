import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import close from "../../assets/images/x.svg";

const Ad = () => {
  const [showAdd, setShowAdd] = useState(true);

  const closeAdd = () => {
    setShowAdd(false);
  };
  return (
    <div
      className="continer-fluid bg-black "
      style={{ display: showAdd ? "block" : "none" }}
    >
      <div className="col d-flex pt-2 justify-content-center align-content-center ">
        <p className="text-center text-white m-0 fs-6">
          Sign up and get 20% off to your first order.
          <Link to="/signup" className="mx-3">
            Sign Up Now ?
          </Link>
          <span onClick={closeAdd} className={classes.add}>
            <img src={close} alt="close" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Ad;
