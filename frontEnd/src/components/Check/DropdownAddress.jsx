import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import AddressForm from "./Adressform";

const DropdownAddress = ({ refetchAddresses }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={toggle}
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
          <AddressForm toggle={toggle} refetchAddresses={refetchAddresses} />
        </div>
      </Collapse>
    </>
  );
};

export default DropdownAddress;
