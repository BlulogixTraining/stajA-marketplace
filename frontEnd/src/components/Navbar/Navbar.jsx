import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { BsCartDash } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "../../api/axios";
const TobNav = ({ isAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ShopCO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="nav-link"
                aria-current="page"
                to="./products"
              >
                Products
              </NavLink>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                  className="nav-link"
                  to="/wishlist"
                >
                  Wishlist
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                  className="nav-link"
                  to="myorders"
                >
                  My Orders
                </NavLink>
              </li>
            )}{" "}
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="nav-link"
                aria-current="page"
                to="./about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="nav-link"
                aria-current="page"
                to="./contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn " type="submit">
              Search
            </button>
          </form>

          <li className="list-group-item mx-3  d-flex gap-3">
            {" "}
            <NavLink to="/cart">
              <BsCartDash className={classes.shop} />
              {/* <span className={classes.cart_count}>{cart?.totalItems}</span> */}
            </NavLink>
            {isAuthenticated && (
              <Link to="/userProfile">
                <FaUser className={classes.profile} />
              </Link>
            )}
            {!isAuthenticated && (
              <NavLink to="/login">
                <FaUser className={classes.profile} />
              </NavLink>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default TobNav;
