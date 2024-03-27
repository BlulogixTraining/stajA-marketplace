import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./Navbar.module.css";
const TobNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Narrows</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/products">All Products</Link> */}
            <Nav.Link href="/products">All Products</Nav.Link>
            <Nav.Link href="#pricing">New Arrivals</Nav.Link>
            <NavDropdown title="Shop" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">shop1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">shop2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">shop3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
              <Row>
                <Col xs="auto mx-0 mx-lg-3  ">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={`${classes.search_bar} rounded-pill`}
                  />
                </Col>
              </Row>
            </Form>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TobNav;
