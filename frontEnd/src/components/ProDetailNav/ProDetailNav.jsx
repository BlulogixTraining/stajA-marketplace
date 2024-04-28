import { useState } from "react";
import classes from "./ProDetailNav.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "../Button/Button";
const ProDetailNav = () => {
  const [key, setKey] = useState("Product Details");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Product Details" title="Product Details">
        <div className="d-flex">
          <h3>Hello Product Detail</h3>
          <Button Name="Buy Now" width="33px"></Button>
        </div>
      </Tab>
      <Tab eventKey="Rating & Reviews" title="Rating & Reviews">
        {" "}
        <div className="d-flex justify-content-between">
          <h3>Rating & Reviews</h3>
          <Button Name="Write review" width="33px"></Button>
        </div>
      </Tab>
      <Tab eventKey="FAQs" title="FAQs">
        {" "}
        <div>
          <h3>FAQs</h3>

          <span className={classes.color}></span>
        </div>
      </Tab>
    </Tabs>
  );
};
export default ProDetailNav;
