import React from 'react';
import { BiHide } from "react-icons/bi";
import { GoChevronLeft, GoCheck, GoSync } from "react-icons/go";
import { BsBoxFill } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { FaCcMastercard } from "react-icons/fa";

const OrderDetails = () => {
  return (
    <div className='m-3'>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <a href="About" className='link-opacity-25 text-primary-emphasis'>
              <GoChevronLeft className='fs-3 pb-1' />
              Return to All My Orders
            </a>
          </div>
          <div className="col-6">
            <a href="#" className='link-opacity-25 text-primary-emphasis'>
              <BiHide className='fs-3 pb-1' /> 
              Hide Your Order
            </a>
          </div>
          <div className="col">
            <a href="#" className='link-opacity-25 text-primary-emphasis'>
              Distance Sales Agreement & Preliminary Information Form
            </a>
          </div>
        </div>
      </div>

      <div className="container text-center border rounded">
        <div className="row">
          <div className="col">
            <p className='text-capitalize fs-4 p-3 fw-bold'>Order detail</p>
          </div>
          <div className="col-2">
            <p className="p-3"><b>Order date</b><br />9 January 2024 - 09:21</p>
          </div>
          <div className="col-2">
            <p className="p-3"><b>Order number</b><br />1021023456</p>
          </div>
          <div className="col-2">
            <p className="p-3"><b>Order Summary</b><br />1 Delivery, 1 Product</p>
          </div>
          <div className="col text-success fs-5 p-3">1 Delivery</div>
        </div>
      </div>

      <div className='m-3'>
        <div className="container text-center border px-3 py-2 mb-2 bg-light">
          <div className="row">
            <div className="col">
              <div className='d-flex justify-content-start'>
                <div className='d-flex align-items-center'>
                  <div className='border rounded-circle bg-white'>
                    <BsBoxFill className='m-4 fs-3' />
                  </div>
                  <span className='p-2 m-1'>
                    <b>Delivery No</b><br />333021450
                  </span>
                </div>
                <div className='d-flex align-items-center border-start p-3 ms-3'>
                  <span>
                    Cargo company <br />
                    <b className='text-danger-emphasis'>express</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='d-flex justify-content-end m-4'>
                <button type="button" className="btn btn-outline-dark">
                  <TbFileInvoice /> View Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='container text-center border'>
          <div className='row bg-light m-3'>
            <div className='col d-flex align-items-center'>
              <span className='d-flex align-items-center'>
                <b className='me-2'>Sales person:</b>
                <a href="#" className='me-3'>APPLE</a>
                <button type="button" className="btn btn-outline-dark py-1 px-1">
                  Following
                </button>
              </span>
            </div>
            <div className='col d-flex justify-content-end'>
              <button type="button" className="btn btn-dark">
                Rate Seller
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex align-items-center justify-content-between'>
              <p className='p-3 mb-0'>
                <span className='text-success me-3 fs-6'>
                  <GoCheck className='fs-5'/> Was delivered
                </span> 
                <br />
                <b>1 </b> product was delivered on Thursday,<b>January 11th.</b>
              </p>
              <button type="button" className="btn btn-outline-dark mx-3">
                Delivery Detail
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex justify-content-start'>
              <div className=''>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4'>
                      <a href="#">
                        <img 
                          src="https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg"
                          className="img-fluid rounded-start" 
                          height={120}
                          width={80}
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body p-0'>
                        <p className='card-text'><b>Apple</b> iPhone 11 128 GB White Mobile Phone Box Without Accessories</p>
                        <p className='card-text'><small className='fw-bolder fs-5'>2533$</small></p>
                        <button type='button' className='btn btn-light border border-black me-3'><GoSync /> Buy Again</button>
                        <button type='button' className='btn btn-light border border-black'>Evaluate the Product</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="grid text-center">
                <div className="m-3 ">
                  <div className="g-col-6 border">
                    <div className="container text-center text-bg-light p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className='fw-bold fs-5'>Delivery Information</span>
                      </div>
                    </div>
                  </div>
                  <div className="g-col-6  border-bottom border-end border-start">
                    <div className="container">
                      <div className="d-flex justify-content-between py-3">
                        <p className="text-start mb-0 text-warning-emphasis fw-bold">Delivery address</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-start mb-0">Ahmed Zaki <br />
                          Sarıyer 34000 / Ayazağa Mah  <br />
                          Turkiye / İstanbul</p> 
                      </div>
                      <div className="d-flex justify-content-between py-3">
                        <p className="text-start mb-0 text-warning-emphasis fw-bold">Invoice address</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-start mb-0">Ahmed Zaki <br />
                          Sarıyer 34000 / Ayazağa Mah  <br />
                          Turkiye / İstanbul</p> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="grid text-center">
                <div className="m-3 ">
                  <div className="g-col-6 border">
                    <div className="container text-center text-bg-light p-3">
                      <div className="col d-flex align-items-center justify-content-between fs-5">
                        <span className='fw-bold'>Payment information</span>
                        <div><FaCcMastercard /> ****5522 - One shot</div>
                      </div>
                    </div>
                  </div>
                  <div className="g-col-6 border-bottom border-end border-start">
                    <div className="container">
                      <div className="d-flex justify-content-between py-2">
                        <p className="text-start mb-0">Product Total</p>
                        <p className="mb-0 fw-bold">$2670</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-start mb-2">Shipping Amount</p>
                        <p className="mb-0 fw-bold">$50</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-start mb-2">Free Shipping for 1000 $ and Above (Seller Pays)</p>
                        <p className="mb-0  text-danger fw-bold">$50</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-start mb-2">Follow and Earn -137 $</p>
                        <p className="mb-0  text-danger fw-bold">$137</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="text-start mb-2 fw-bold fs-5">Total</p> 
                        <p className="mb-0 fw-bold fs-5 ">$2533</p>
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
