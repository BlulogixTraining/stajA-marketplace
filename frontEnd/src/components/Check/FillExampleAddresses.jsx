import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AddressTabs from "./AddressTabs";
import PaymentTabs from "./PaymentsTabs";
import DropdownAddress from "./DropdownAddress";
import DropdownPayment from "./DropdownPayment";

const FillExampleAddresses = ({
  addresses,
  payments,
  refetchAddresses,
  fetchPayments,
  OrderData,
}) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelect = (NameOnCard) => {
    const selected = payments.find(
      (payment) => payment.NameOnCard === NameOnCard
    );
    setSelectedPayment(selected);
  };

  const handleAddressSelect = (name) => {
    const selected = addresses.find((address) => address.name === name);
    setSelectedAddress(selected);
  };

  OrderData({
    payment: selectedPayment,
    address: selectedAddress,
  });

  return (
    <Tabs
      defaultActiveKey="address"
      id="fill-tab-example"
      className="mb-3 checkout"
      fill
    >
      <Tab
        eventKey="address"
        title={<span className="tab-title">Address</span>}
      >
        <p className="choosing">Choose Your Address Please:</p>
        <AddressTabs
          addresses={addresses}
          refetchAddresses={refetchAddresses}
          onSelectAddress={handleAddressSelect}
        />
        <br />
        <DropdownAddress refetchAddresses={refetchAddresses} />
      </Tab>
      <Tab
        eventKey="payment"
        title={<span className="tab-title">Payment</span>}
      >
        <p className="choosing">Choose Your Payment Method:</p>
        <PaymentTabs
          payments={payments}
          onSelectPayment={handlePaymentSelect}
          refreshPayments={fetchPayments}
        />
        <br />
        <DropdownPayment refreshPayments={fetchPayments} />
      </Tab>
    </Tabs>
  );
};

export default FillExampleAddresses;
