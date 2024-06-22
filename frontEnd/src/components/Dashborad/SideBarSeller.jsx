import classes from "./Dashboard.module.css";
import { RiHomeSmileLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
export const SideBarSeller = () => {
  return (
    <div
      className={`d-flex flex-column vh-100 text-white p-3 ${classes.sideBar} shadow-sm   `}
      id="sidebar"
    >
      <div className={`mb-4 ${classes.brand}`}>
        <img
          src="https://via.placeholder.com/100"
          alt="Groth Logo"
          className="mb-2"
          id="logo"
        />
        <h4>Shopcoo</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "black" : "",
                border: isActive ? "1px solid black" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            className={`nav-link ${classes.nav_item}`}
            aria-current="page"
            to="/dashboard"
            end
          >
            <RiHomeSmileLine /> Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "black" : "",
                border: isActive ? "1px solid black" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            className={`nav-link ${classes.nav_item}`}
            aria-current="page"
            to="./products"
          >
            <MdOutlineProductionQuantityLimits /> Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "black" : "",
                border: isActive ? "1px solid black" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            className={`nav-link ${classes.nav_item}`}
            aria-current="page"
            to="./categories"
          >
            <BsClipboardData /> Categories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "black" : "",
                border: isActive ? "1px solid black" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            className={`nav-link ${classes.nav_item}`}
            aria-current="page"
            to="./varients"
          >
            <BsClipboardData /> Variants
          </NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "black" : "",
                border: isActive ? "1px solid black" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            className={`nav-link ${classes.nav_item}`}
            aria-current="page"
            to="./product-details"
          >
            <BsClipboardData /> Product details
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <a className={`nav-link ${classes.nav_item}`} href="#">
            {" "}
            <FaShippingFast /> Orders
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className={`nav-link ${classes.nav_item}`} href="#">
            <FaRegCircleUser /> Profile
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className={`nav-link ${classes.nav_item}`} href="#">
            <i className="bi bi-megaphone"></i> Marketing
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className={`nav-link ${classes.nav_item}`} href="#">
            <i className="bi bi-gear"></i> Setting
          </a>
        </li>
      </ul>
      <div className="mt-auto border-top border-dark-subtle ">
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a className={`nav-link ${classes.nav_item}`} href="#">
              <FaRegCircleUser /> User
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className={`nav-link ${classes.nav_item}`} href="#">
              <IoIosLogOut /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
