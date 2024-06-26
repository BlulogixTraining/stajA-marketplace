import { useState } from "react";
import classes from "./ProDetailNav.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import ProductReview from "../ProductReview/ProductReview";
import Button from "../Button/Button";
import Addreviw from "../ui/Addreviw";

const ProDetailNav = ({ reviews, ratedId, productDetails }) => {
  const [key, setKey] = useState("Product Details");
  const detailsArray = Array.isArray(productDetails) ? productDetails : [];

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
    >
      <Tab eventKey="Product Details" title="Product Details">
        <div className="d-flex justify-content-between">
          <h3>Product Detail</h3>
        </div>
        <div className="col-12 ">
          {detailsArray?.map((detail) => (
            <div
              key={detail._id}
              className="d-flex justify-content-between bg-body-secondary py-2 px-3 mt-2 rounded-3"
            >
              <h5 className="m-0 py-1">- {detail.key.key}</h5>
              <h6 className="m-0 py-1">{detail.value}</h6>
            </div>
          ))}
        </div>
      </Tab>
      <Tab eventKey="Rating & Reviews" title="Rating & Reviews">
        {" "}
        <div className="d-flex justify-content-between">
          <h3>Rating & Reviews</h3>

          {/* <Addreviw ratedId={ratedId} /> */}
        </div>
        <div className="d-flex flex-wrap gap-2   mt-3">
          <ProductReview reviews={reviews} />
        </div>
      </Tab>
      <Tab eventKey="FAQs" title="FAQs">
        {" "}
        <div>
          <h3>FAQs</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What factors should I consider when choosing an online clothing
                store?
              </Accordion.Header>
              <Accordion.Body>
                Reputation, product variety, return policies, and website
                usability are key factors to evaluate for a satisfying shopping
                experience.{" "}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How can online clothing retailers improve customer satisfaction?
              </Accordion.Header>
              <Accordion.Body>
                By optimizing website navigation, offering detailed product
                information, providing virtual fitting rooms, personalizing
                recommendations, and offering responsive customer support.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Tab>
    </Tabs>
  );
};
export default ProDetailNav;
