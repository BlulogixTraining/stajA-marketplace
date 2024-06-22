import { RiVisaLine } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";
import { GoCheck } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
const url = "https://staja-marketplace.onrender.com";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/orders");
        console.log(response.data.orders);
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <div>
      {/* Header */}
      <div className="container overflow-hidden text-center border border-2 p-2 mb-2">
        <div className="row gx-5">
          <div className="col col-sm-4">
            <div className="p-2">
              <p className="fs-3 text-capitalize fw-light">My Orders</p>
            </div>
          </div>
          <div className="col col-sm-4">
            <div className="p-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product or brand name"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <IoSearchOutline />
                </button>
              </div>
            </div>
          </div>
          <div className="col col-sm-4">
            <div className="p-3 mx-5">
              <select
                className="form-select text-center"
                aria-label="Default select example"
              >
                <option selected>All my orders</option>
                <option value="1">Last 1 month</option>
                <option value="2">Last 3 months</option>
                <option value="3">2023</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="container text-center">
        <div className="row gx-5">
          <div className="col col-sm-6">
            <div className="button-container">
              <button type="button" className="btn btn-dark mr-2">
                All
              </button>
              <button type="button" className="btn btn-dark mx-2">
                Ongoing Orders
              </button>
              <button type="button" className="btn btn-dark mx-2">
                Returns
              </button>
              <button type="button" className="btn btn-dark mx-2">
                Cancellations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details */}
      {orders.map((order, index) => (
        <div key={index} className="m-3 ">
          <div className="container text-center text-bg-light  border ">
            <div className="row">
              <div className="col">
                <p className="p-3">
                  <b>Order date</b>
                  <br />
                  {order.createdAt}
                </p>
              </div>
              <div className="col">
                <p className="p-3">
                  <b>Buyer</b>
                  <br />
                  {order.user_id.name}
                </p>
              </div>
              <div className="col">
                <p className="p-3 ">
                  <b>Amount</b>
                  <br />
                  {order.total}
                </p>
              </div>{" "}
              <div className="col">
                <p className="p-3">
                  <b>Discount</b>
                  <br />
                  {order.totalDiscount}
                </p>
              </div>
              <div className="col">
                <a
                  type="button"
                  className="btn btn-dark m-3"
                  href="/orderdetails
                "
                >
                  Order detail
                </a>
              </div>
            </div>
          </div>
          {/* Delivery Status */}
          <div className=" container text-center border">
            <div className="row">
              <div className="col ">
                <p className="p-3">
                  <span
                    className={`fs-5 me-2 ${
                      order.status === "Returned"
                        ? "text-warning"
                        : order.status === "Delivered"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {order.status === "Returned" ? (
                      <TiArrowBack className="fs-2" />
                    ) : order.status === "Delivered" ? (
                      <GoCheck className="fs-2" />
                    ) : (
                      <GrFormClose className="fs-2" />
                    )}{" "}
                    {order.status}
                  </span>
                  <br />
                  <b>{order.deliveryStatus}</b>
                </p>
              </div>
              <div className="col">
                <img
                  src={`${url}${order.products[0].image[0]}`}
                  height={120}
                  width={80}
                  className="p-1"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
