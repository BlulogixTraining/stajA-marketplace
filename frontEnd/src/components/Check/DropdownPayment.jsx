import { Collapse, Button } from "react-bootstrap";
import Paymentform from "./Paymentform";
import { useState } from "react";

const DropdownPayment = ({ refreshPayments }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="dark"
        className="mt-2"
      >
        Or Click To Add One
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <br />
          <Paymentform refreshPayments={refreshPayments} toggle={toggle} />
        </div>
      </Collapse>
    </>
  );
};

export default DropdownPayment;
