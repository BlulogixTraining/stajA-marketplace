import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "../../api/axios";

const Paymentform = ({ toggle, refreshPayments }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/payments", data);
      reset();
      toggle();
      refreshPayments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formGridCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          {...register("cardNumber", { required: true })}
          placeholder="Enter card number"
        />
        {errors.cardNumber && (
          <span className="text-danger">This field is required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridNameOnCard">
        <Form.Label>Name On Card</Form.Label>
        <Form.Control
          {...register("NameOnCard", { required: true })}
          placeholder="Enter name on card"
        />
        {errors.nameOnCard && (
          <span className="text-danger">This field is required</span>
        )}
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCardValidationDate">
          <Form.Label>Card Validation Date</Form.Label>
          <Form.Control
            {...register("cardValidationDate", { required: true })}
            placeholder="MM/YY"
          />
          {errors.cardValidationDate && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCCV">
          <Form.Label>CCV</Form.Label>
          <Form.Control
            {...register("ccv", { required: true })}
            placeholder="Enter CCV"
          />
          {errors.ccv && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Paymentform;
