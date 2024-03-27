import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./Navbar.module.css";
import { BsCartDash } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const TobNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">SHOP.CO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/products">All Products</Link> */}
            <Nav.Link href="/products">All Products</Nav.Link>
            <Nav.Link href="#pricing">New Arrivals</Nav.Link>
            <NavDropdown title="Shop" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/products">shop1</NavDropdown.Item>
              <NavDropdown.Item href="/products">shop2</NavDropdown.Item>
              <NavDropdown.Item href="/products">shop3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">Brands</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
              <Row>
                <Col xs="auto mx-0 mx-lg-3 ">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={`${classes.search_bar} rounded-pill`}
                  />
                </Col>
              </Row>
            </Form>
            <Nav.Link href="#deets">
              <BsCartDash className={classes.shop} />
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              <FaUser className={classes.profile} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TobNav;
