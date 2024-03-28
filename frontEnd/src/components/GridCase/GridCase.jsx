import casual from "../../assets/images/casual.png";
import formal from "../../assets/images/formal.png";
import gym from "../../assets/images/gym.png";
import party from "../../assets/images/party.png";
import { Link } from "react-router-dom";
import classes from "./GirdCase.module.css";
const GridCase = () => {
  return (
    <div className="container bg-body-tertiary p-2 py-3  rounded rounded-5   ">
      <h1 className={classes.caseTitle}>Grid Case</h1>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-4">
          <Link
            to={`/products?type=casual`}
            className={`${classes.smallCard} shadow-sm bg-body-tertiary rounded-4`}
          >
            {" "}
            <img src={casual} alt="casual" className="img-fluid" />
            <span className="text-center">Casual</span>
          </Link>
        </div>
        <div className="col-12 col-lg-6">
          <Link
            to={`/products?type=formal`}
            className={`${classes.bigCard} shadow-sm bg-body-tertiary rounded-4`}
          >
            {" "}
            <img src={formal} alt="formal" className="img-fluid" />
            <span className="text-center">Formal</span>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-12 col-lg-6">
          <Link
            to={`/products?type=party`}
            className={`${classes.bigCard} shadow-sm bg-body-tertiary rounded-4`}
          >
            <img src={party} alt="party" className="img-fluid" />
            <span className="text-center">Party</span>
          </Link>
        </div>
        <div className="col-12 col-lg-4">
          <Link
            to={`/products?type=gym`}
            className={`${classes.smallCard} shadow-sm bg-body-tertiary rounded-4`}
          >
            <img src={gym} alt="gym" className="img-fluid" />
            <span className="text-center">Gym</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCase;
