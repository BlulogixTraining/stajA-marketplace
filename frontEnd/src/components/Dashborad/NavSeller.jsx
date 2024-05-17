import classes from "./Dashboard.module.css";
import { HiChatAlt2 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";

export const NavSeller = () => {
  return (
    <div
      className={` d-flex container-fluid justify-content-between align-items-center ${classes.topNav} shadow-sm py-2 px-5`}
    >
      <div className={`${classes.greating}`}>
        <h4 className={`${classes.topNavTitle} m-0`}>Welcome , Sultan</h4>
        <p className={`${classes.topNavSubTitle}`}>
          1 October 2022 |11:99 AM GMT
        </p>
      </div>
      <div className="d-flex justify-items-center  align-items-center gap-3">
        <div className={` d-flex gap-2 ${classes.icons}`}>
          <a href="#">
            <HiChatAlt2 className="fs-3" />
          </a>
          <a href="#" className={classes.bill}>
            <IoNotificationsOutline className="fs-3" />
          </a>
        </div>

        <div className={`${classes.search}`}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
