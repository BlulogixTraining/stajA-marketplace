import { useEffect, useState } from "react";
import FillExampleAddresses from "./FillExampleAddresses";
import "./CheckOut.css";
import axios from "../../api/axios";

const Checkout = () => {
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);
  const fetchAddresses = async () => {
    try {
      const res = await axios.get(`/addresses`);
      setAddresses(res.data.addresses);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPayments = async () => {
    try {
      const res = await axios.get(`/payments`);
      setPayments(res.data.payments);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAddresses();
    fetchPayments();
  }, []);

  const handleOrderData = async (data, make) => {
    // console.log(data);
    if (make === "add") {
      console.log(data);
      console.log(make);
      try {
        const res = await axios.post("/orders", data);
        console.log(res.data);
        console.log("Order has been placed successfully!");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container">
      <div className="row container mt-3">
        <div className="col-8">
          <FillExampleAddresses
            addresses={addresses}
            payments={payments}
            refetchAddresses={fetchAddresses}
            fetchPayments={fetchPayments}
            OrderData={handleOrderData}
          />
        </div>
        <div className="col-4 mt-5">
          <div className="container gap-4 ">
            <h4>Order Summary</h4>
            <button className="verification-button" onClick={() => {}}>
              Save & continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
