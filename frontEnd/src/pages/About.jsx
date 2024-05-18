import React from 'react';
import { RiVisaLine } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";
import { GoCheck } from 'react-icons/go';
import { IoSearchOutline } from 'react-icons/io5';
import { GrFormClose } from "react-icons/gr";

const About = () => {
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
                <input type="text" className="form-control" placeholder="Product or brand name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><IoSearchOutline /></button>
              </div>
            </div>
          </div>
          <div className="col col-sm-4">
            <div className="p-3 mx-5">
              <select className="form-select text-center" aria-label="Default select example">
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
              <button type="button" className="btn btn-dark mr-2">All</button>
              <button type="button" className="btn btn-dark mx-2">Ongoing Orders</button>
              <button type="button" className="btn btn-dark mx-2">Returns</button>
              <button type="button" className="btn btn-dark mx-2">Cancellations</button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="m-3 ">
        <div className="container text-center text-bg-light  border ">
          <div className="row">
            <div className="col">
              <p className="p-3"><b>Order date</b><br />9 January 2024 - 09:21</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Order Summary</b><br />1 Delivery, 1 Product</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Buyer</b><br />Ahmed Zaki</p>
            </div>
            <div className="col">
              <p className="p-3 "><b>Amount</b><br />2533$</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-dark m-3 ">Order detail</button>
            </div>
          </div>
        </div>
        
        {/* Delivery Status */}
        <div className=" container text-center border">
          <div className="row">
            <div className="col ">
              <p className="p-3">
                <span className="text-success me-2 fs-5"><GoCheck className='fs-2'/> Was delivered</span> 
                <br />
                <b>1 product was delivered on January 11.</b>
              </p>
            </div>
            <div className="col">
              <img
                src="https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg"
                height={120}
                width={80}
                className="p-1"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 ">
        <div className="container text-center text-bg-light  border ">
          <div className="row">
            <div className="col">
              <p className="p-3"><b>Order date</b><br />18 August 2023 - 01:48</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Order Summary</b><br />1 Delivery, 1 Product</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Buyer</b><br />Ahmed Zaki</p>
            </div>
            <div className="col">
              <p className="p-3 "><b>Amount</b><br />3950$</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-dark m-3 ">Order detail</button>
            </div>
          </div>
        </div>
        
        {/* Delivery Status */}
        <div className=" container text-center border">
          <div className="row">
            <div className="col ">
              <p className="p-3 ">
                <span className="text-warning me-2 fs-5"><TiArrowBack className='fs-2' /> Returned</span> 
                <br />
                <b>Refund Amount: 3950$ <RiVisaLine className='fs-2' /> ****8888 </b>
              </p>
            </div>
            <div className="col">
              <img
                src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1224/product/media/images/prod/SPM/PIM/20240325/03/4dcd7811-e1b2-31e6-b796-312e0a48bf64/1_org_zoom.jpg"
                height={120}
                width={80}
                className="p-1"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 ">
        <div className="container text-center text-bg-light  border ">
          <div className="row">
            <div className="col">
              <p className="p-3"><b>Order date</b><br />23 April 2023 - 15:50</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Order Summary</b><br />1 Delivery, 2 Product</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Buyer</b><br />Ahmed Zaki</p>
            </div>
            <div className="col">
              <p className="p-3 "><b>Amount</b><br />421$</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-dark m-3 ">Order detail</button>
            </div>
          </div>
        </div>
        
        {/* Delivery Status */}
        <div className=" container text-center border">
          <div className="row">
            <div className="col ">
              <p className="p-3">
                <span className="text-danger me-2 fs-5"><GrFormClose className='fs-2'/> It is cancelled</span> 
                <br />
               <b> 2 product were canceled.</b>
              </p>
            </div>
            <div className="col">
              <img
                src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1299/product/media/images/prod/SPM/PIM/20240507/15/5b8ee71d-4175-3ed1-8e22-b6863f2f740b/1_org_zoom.jpg"
                height={120}
                width={80}
                className="p-1"
                alt="Product Image"
              />
                 <img
                src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty292/product/media/images/20220112/15/25465194/357030096/1/1_org_zoom.jpg"
                height={120}
                width={80}
                className="p-1"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 ">
        <div className="container text-center text-bg-light  border ">
          <div className="row">
            <div className="col">
              <p className="p-3"><b>Order date</b><br />15 December 2020 - 15:17</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Order Summary</b><br />2 Delivery, 2 Product</p>
            </div>
            <div className="col">
              <p className="p-3"><b>Buyer</b><br />Ahmed Zaki</p>
            </div>
            <div className="col">
              <p className="p-3 "><b>Amount</b><br />5320$</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-dark m-3 ">Order detail</button>
            </div>
          </div>
        </div>
        
        {/* Delivery Status */}
        <div className=" container text-center border">
          <div className="row">
            <div className="col ">
              <p className="p-3 ">
                <span className="text-warning me-2 fs-5"><TiArrowBack className='fs-2' /> Returned</span> 
                <br />
                <b>Refund Amount: 765$ <RiVisaLine className='fs-2' /> ****8888 </b>
              </p>
            </div>
            <div className="col">
              <img
                src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty100/product/media/images/20210407/03/3ffa14d7/43855346/1/1_org_zoom.jpg"
                height={120}
                width={80}
                className="p-1"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
        <div className=" container text-center border">
          <div className="row">
            <div className="col ">
            <p className="p-3">
                <span className="text-success me-2 fs-5"><GoCheck className='fs-2'/> Was delivered</span> 
                <br />
                <b>1 product was delivered on December 22.</b>
              </p>
            </div>
            <div className="col">
              <img
                src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1015/product/media/images/prod/SPM/PIM/20231018/12/2d095311-ae1c-3370-8c92-fe1bd1a8451c/1_org_zoom.jpg"
                height={120}
                width={80}
                className="p-1"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
