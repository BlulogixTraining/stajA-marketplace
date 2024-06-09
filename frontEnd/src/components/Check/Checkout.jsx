import { useEffect, useState } from "react";
import FillExampleAddresses from "./FillExampleAddresses";
import "./CheckOut.css";
import axios from "../../api/axios";
import { redirect } from "react-router-dom";
import SuccessOrder from "./SuccessOrder";

const Checkout = () => {
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [orderData, setOrderData] = useState({
    payment_id: null,
    address_id: null,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleOrderData = (data) => {
    setOrderData(data);
    console.log("OrderData:", data);
  };

  const makeOrder = async () => {
    try {
      const res = await axios.post(`/orders`, orderData);
      console.log("res:", res);
      console.log(222);
      if (res.status === 201 && res.data.status === "Success") {
        setShowSuccessModal(true);
        console.log("222");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    redirect("/products");
  };

  return (
    <div className="container">
      <div className="row container mt-3 m-0 m-lg-1 p-0 p-lg-1">
        <div className="col-12 col-lg-8">
          <FillExampleAddresses
            addresses={addresses}
            payments={payments}
            refetchAddresses={fetchAddresses}
            fetchPayments={fetchPayments}
            OrderData={handleOrderData}
          />
        </div>
        <div className="col-12 col-lg-4 mt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4>Order Summary</h4>
            <button className="verification-button" onClick={makeOrder}>
              Save & continue
            </button>
          </div>
        </div>
      </div>
      {showSuccessModal && <SuccessOrder onClose={handleSuccessModalClose} />}
    </div>
  );
};

export default Checkout;
