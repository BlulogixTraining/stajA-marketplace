import React, { useContext, useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { GoChevronLeft, GoCheck, GoSync } from "react-icons/go";
import { BsBoxFill } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { FaCcMastercard } from "react-icons/fa";
import axios from "../api/axios";
import { Link, useLocation } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { MdOutlinePending } from "react-icons/md";
import { CartContext } from "../context/CartContext";
import { Alert, CircularProgress } from "@mui/material";
import Addreviw from "../components/ui/Addreviw";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToCart, errorCart, successCart } = useContext(CartContext);
  const location = useLocation();
  const orderId = location.state?.orderID;

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/orders/details/${orderId}`);
        console.log(response.data);
        setOrder(response.data.orders);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="container d-flex gap-2 justify-content-center p-5">
        {" "}
        <CircularProgress />
        {loading && <h2>Loading...</h2>}
      </div>
    );
  }

  if (!order) {
    return <div>No order details available</div>;
  }

  const url = "https://staja-marketplace.onrender.com";

  return (
    <div className="m-3">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Link
              to="/myorders"
              className="link-opacity-25 text-primary-emphasis"
            >
              <GoChevronLeft className="fs-3 pb-1" />
              Return to All My Orders
            </Link>
          </div>
          <div className="col-6">
            <a href="#" className="link-opacity-25 text-primary-emphasis">
              <BiHide className="fs-3 pb-1" />
              Hide Your Order
            </a>
          </div>
          <div className="col">
            <a href="#" className="link-opacity-25 text-primary-emphasis">
              Distance Sales Agreement & Preliminary Information Form
            </a>
          </div>
        </div>
      </div>

      <div className="container text-center border rounded mt-4">
        <div className="row">
          <div className="col">
            <p className="text-capitalize fs-4 p-3 fw-bold">Order detail</p>
          </div>
          <div className="col">
            <p className="p-3">
              <b>Order date</b>
              <br />
              {order.createdAt.slice(0, 10)}
            </p>
          </div>
          <div className="col">
            <p className="p-3">
              <b>Order number</b>
              <br />
              {order._id}
            </p>
          </div>
          <div className="col">
            <p className="p-3">
              <b>Order Summary</b>
              <br />
              {order.products.length} Delivery, {order.products.length}{" "}
              Product(s)
            </p>
          </div>
          <div className="col text-success fs-5 p-3">
            {order.products.length} Delivery
          </div>
        </div>

        <div className="m-3">
          <div className="container text-center border px-3 py-2 mb-2 bg-light">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-start">
                  <div className="d-flex align-items-center">
                    <div className="border rounded-circle bg-white">
                      <BsBoxFill className="m-4 fs-3" />
                    </div>
                    <span className="p-2 m-1">
                      <b>Delivery No</b>
                      <br />
                      {Math.floor(Math.random() * 1000000000)}
                    </span>
                  </div>
                  <div className="d-flex align-items-center border-start p-3 ms-3">
                    <span>
                      Cargo company <br />
                      <b className="text-danger-emphasis">express</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex justify-content-end m-4">
                  <button type="button" className="btn btn-outline-dark">
                    <TbFileInvoice /> View Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center border">
            <div className="row bg-light m-3">
              <div className="col d-flex align-items-center">
                <span className="d-flex align-items-center">
                  <b className="me-2">Sales person:</b>
                  <a href="#" className="me-3">
                    Shopcoo
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline-dark py-1 px-1"
                  >
                    Following
                  </button>
                </span>
              </div>
              <div className="col d-flex justify-content-end">
                <button type="button" className="btn btn-dark">
                  Rate Seller
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center justify-content-between">
                <p className="p-3 mb-0">
                  <span className="text-success me-3 fs-6">
                    {order.status === "Returned" ? (
                      <>
                        <TiArrowBack className="fs-5" />
                        {order.status}
                      </>
                    ) : order.status === "completed" ? (
                      <>
                        <GoCheck className="fs-5" />
                        {order.status}
                      </>
                    ) : (
                      <div className="">
                        <MdOutlinePending className="fs-5 mx-2" />
                        {order.status}
                      </div>
                    )}
                  </span>
                  <br />
                  <b>{order.products.length} </b> product(s) were delivered on
                  Thursday,<b> January 11th.</b>
                </p>
                <button type="button" className="btn btn-outline-dark mx-3">
                  Delivery Detail
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-start gap-2 flex-wrap">
                {order.products.map(
                  (product) => (
                    console.log("prod3uct", product),
                    (
                      <div key={product._id} className="">
                        <div className="card mb-3">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <Link to={`/products/${product.product_id.slug}`}>
                                <img
                                  src={`${url}${product.image[0]}`}
                                  className="img-fluid rounded-start"
                                  height={120}
                                  width={100}
                                  alt="Product Image"
                                />
                              </Link>
                            </div>
                            <div className="col-md-8">
                              <div className="card-body p-0">
                                <p className="card-text position-relative">
                                  <b>Product name:</b> {product.product_id.name}
                                  <div className="position-absolute top-50">
                                    {errorCart && (
                                      <Alert severity="error">
                                        {errorCart}
                                      </Alert>
                                    )}
                                    {successCart && (
                                      <Alert severity="success">
                                        {successCart}
                                      </Alert>
                                    )}
                                  </div>
                                </p>
                                <p className="card-text">
                                  <small className="fw-bolder fs-5">
                                    ${product.price}
                                  </small>
                                </p>
                                <div className="d-flex gap-1 flex-column">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      addToCart(product.product_id._id)
                                    }
                                    className="btn btn-light border border-black mb-2"
                                  >
                                    <GoSync /> Buy Again
                                  </button>
                                  <Addreviw ratedId={product.product_id._id} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="grid text-center">
                    <div className="m-3">
                      <div className="g-col-6 border">
                        <div className="container text-center text-bg-light p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="fw-bold fs-5">
                              Delivery Information
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="g-col-6 border-bottom border-end border-start">
                        <div className="container">
                          <div className="d-flex justify-content-between py-3">
                            <p className="text-start mb-0 text-warning-emphasis fw-bold">
                              Delivery address
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="text-start mb-0">
                              {order.address_id ? (
                                <>
                                  Name: {order.address_id.name} <br />
                                  Address: {order.address_id.addressline1}
                                  &nbsp;
                                  {order.address_id.addressline2} &nbsp;
                                  {order.address_id.state} &nbsp;
                                  {order.address_id.zipcode}
                                </>
                              ) : (
                                "No address provided"
                              )}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between py-3">
                            <p className="text-start mb-0 text-warning-emphasis fw-bold">
                              Invoice address
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="text-start mb-0">
                              {order.address_id ? (
                                <>
                                  Name: {order.address_id.name} <br />
                                  {order.address_id.addressline1} &nbsp;
                                  {order.address_id.addressline2} &nbsp;
                                  {order.address_id.state} &nbsp;
                                  {order.address_id.zipcode}
                                </>
                              ) : (
                                "No address provided"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="grid text-center">
                    <div className="m-3">
                      <div className="g-col-6 border">
                        <div className="container text-center text-bg-light p-3">
                          <div className="col d-flex align-items-center justify-content-between fs-5">
                            <span className="fw-bold">Payment information</span>
                            <div>
                              <FaCcMastercard /> ****
                              {order.payment_id
                                ? order.payment_id.cardNumber
                                    .toString()
                                    .slice(-4)
                                : "0000"}{" "}
                              - One shot
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="g-col-6 border-bottom border-end border-start">
                        <div className="container">
                          <div className="d-flex justify-content-between py-2">
                            <p className="text-start mb-0">Product Total</p>
                            <p className="mb-0 fw-bold">${order.subtotal}</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="text-start mb-2">Shipping Amount</p>
                            <p className="mb-0 fw-bold">$50</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="text-start mb-2">
                              Free Shipping for $1000 and Above (Seller Pays)
                            </p>
                            <p className="mb-0 text-danger fw-bold">$50</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="text-start mb-2">Discount Amount</p>
                            <p className="mb-0 text-danger fw-bold">
                              ${order.totalDiscount}
                            </p>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between">
                            <p className="text-start mb-2 fw-bold fs-5">
                              Total
                            </p>
                            <p className="mb-0 fw-bold fs-5">${order.total}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
