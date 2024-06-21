import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import axios from "../../api/axios";
import { FaTrashAlt } from "react-icons/fa";

const PaymentTabs = ({ onSelectPayment, refreshPayments, payments }) => {
  const removeAddress = async (id) => {
    try {
      await axios.delete(`/payments/${id}`);
      payments.filter((address) => address._id !== id);
      refreshPayments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="payment-0">
        <Row>
          <Col sm={4}>
            <Nav variant="pills" className="flex-column">
              {payments?.map((payment, index) => (
                <Nav.Item key={index} className="addressAA">
                  <Nav.Link
                    eventKey={`payment-${index}`}
                    className="d-flex justify-content-between"
                    onClick={() => onSelectPayment(payment.NameOnCard)}
                  >
                    {payment.NameOnCard}

                    <span onClick={() => removeAddress(payment._id)}>
                      <FaTrashAlt />
                    </span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content className="content_container">
              {payments.map((payment, index) => (
                <Tab.Pane key={index} eventKey={`payment-${index}`}>
                  Card Type: {payment.NameOnCard}
                  <br />
                  Card Number: {payment.cardNumber}
                  <br />
                  Expiry Date: {payment.CardValidationDate}
                  <br />
                  Cardholder Name: {payment.NameOnCard}
                  <br />
                  CCV: {payment.ccv}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default PaymentTabs;
