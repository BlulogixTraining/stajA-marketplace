import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./Navbar.module.css";
import { BsCartDash } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const TobNav = () => {
  const isAuthenticated = useIsAuthenticated();
  console.log("isAuthenticated", isAuthenticated);
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="./products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                wishlist
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link" href="#">
                models
              </Link>
            </li>
            {/* <NavDropdown title="Catigory" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <li className="list-group-item mx-3  d-flex gap-3">
            {" "}
            <Link to="/cart">
              <BsCartDash className={classes.shop} />
            </Link>
            {isAuthenticated && (
              <Link to="/userProfile">
                <FaUser className={classes.profile} />
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/login">
                <FaUser className={classes.profile} />
              </Link>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};
{
  /* <Nav.Link href="/cart">
              <BsCartDash className={classes.shop} />
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              <FaUser className={classes.profile} />
            </Nav.Link> */
}
export default TobNav;
