import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SummaryOfCheckOut from './SummaryOfCheckOut';
import DropdownPayment from './DropDownPayment';
import './CheckOut.css';
import Acception from './Acception';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import axios from '../../api/axios';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
const url = "https://jsonplaceholder.typicode.com/posts";

function GridAddress() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "School",
            addressLine1: "Basibuyuk Mah",
            addressLine2: "Sureyyepasa Cad",
            city: "Istanbul",
            state: "Maltepe",
            zipcode: "46597",
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(url, JSON.stringify(data));
            if (res.status === 200 || res.status === 201) {
                console.log("Done Successfully");
            }
            console.log(res);
            const newAddress = {
                name: res.data.name,
                addressLine1: res.data.addressLine1,
                addressLine2: res.data.addressLine2,
                city: res.data.city,
                state: res.data.state,
                zipcode: res.data.zipcode
            };
            AddressInfo.push(newAddress);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGridAddress0">
                <Form.Label>Name Of The Address</Form.Label>
                <Form.Control {...register("name")} placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control {...register("addressLine1")} placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control {...register("addressLine2")} placeholder="" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control {...register("city")} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control {...register("state")} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control {...register("zipcode")} />
                </Form.Group>
            </Row>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function DropdownAddress() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="dark"
                className='mt-2'
            >
            Or Click To Add One
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <br></br>
                    <GridAddress />
                </div>
            </Collapse>
        </>
    );
}

function LeftTabsAddresses({ addresses }) {

    // Add The New Data

    return (
        <div className='mt-5'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="address-0">
                <Row>
                    <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                            {addresses.map((address, index) => (
                                <Nav.Item key={index} className='addressAA'>
                                    <Nav.Link eventKey={`address-${index}`}>{address.name}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {addresses.map((address, index) => (
                                <Tab.Pane key={index} eventKey={`address-${index}`}>
                                    {address.addressLine1}, {address.addressLine2}. {address.state} / {address.city} {address.zipcode}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

function FillExampleAddresses({ addresses, payments }) {
    const [selectedAddress, setSelectedAddress] = useState(addresses.find(address => address.name === 'Home'));
    const [selectedPayment, setSelectedPayment] = useState(payments[0]);

    const handlePaymentSelect = (selectedType) => {
        const selected = payments.find(payment => payment.cardType === selectedType);
        setSelectedPayment(selected);
    };

    const handleAddressSelect = (selectedType) => {
        const selected = addresses.find(address => address.name === selectedType);
        setSelectedAddress(selected);
    };

    return (
        <Tabs
            defaultActiveKey="address"
            id="fill-tab-example"
            className="mb-3 checkout"
            fill
        >
            <Tab eventKey="address" title={<span className="tab-title">Address</span>}>
                <p className='choosing'>Choose Your Address Please:</p>
                <LeftTabsAddresses addresses={addresses} />
                <br></br>
                <DropdownAddress />
            </Tab>
            <Tab eventKey="payment" title={<span className="tab-title">Payment</span>} >
                <p className='choosing'>Choose Your Payment Method:</p>
                <Payments payments={payments} onSelectPayment={handlePaymentSelect} />
                <br />
                <DropdownPayment />
            </Tab>
        </Tabs>
    );
}

function Payments({ payments }) {
    return (
        <div className='mt-5'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="payment-0">
                <Row>
                    <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                            {payments.map((payment, index) => (
                                <Nav.Item key={index} className='addressAA'>
                                    <Nav.Link eventKey={`payment-${index}`}>{payment.cardType}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {payments.map((payment, index) => (
                                <Tab.Pane key={index} eventKey={`payment-${index}`}>
                                    Card Type: {payment.cardType}<br />
                                    Card Number: {payment.cardNumber}<br />
                                    Expiry Date: {payment.expiryDate}<br />
                                    Cardholder Name: {payment.cardholderName}<br />
                                    CCV: {payment.ccv}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

let AddressInfo = [
    {
        name: 'Home',
        addressLine1: 'Bolluca Mahallesi',
        addressLine2: 'Abdullah Gul Cad',
        city: 'Istanbul',
        state: 'Arnavutkoy',
        zipcode: '34725',
    },
    {
        name: 'Office',
        addressLine1: 'Inkilap Mah',
        addressLine2: 'Kucuksu Cad',
        city: 'Istanbul',
        state: 'Umraniye',
        zipcode: '27589',
    },
    {
        name: 'Workplace',
        addressLine1: 'Başakşehir Mah',
        addressLine2: 'Ertuğrulgazi Cad',
        city: 'Istanbul',
        state: 'Basaksehir',
        zipcode: '36697',
    },
];

const PaymentsInfo = [
    {
        cardType: 'Ziraat',
        cardNumber: '1234 5678 9012 3456',
        expiryDate: '12/25',
        cardholderName: 'John Doe',
        ccv: '123'
    },
    {
        cardType: 'Kuveyt Turk',
        cardNumber: '2345 6789 0123 4567',
        expiryDate: '01/26',
        cardholderName: 'Jane Smith',
        ccv: '456'
    },
    {
        cardType: 'Halk',
        cardNumber: '3456 7890 1234 5678',
        expiryDate: '03/27',
        cardholderName: 'Alice Johnson',
        ccv: '789'
    },
    {
        cardType: 'Garanti',
        cardNumber: '4567 8901 2345 6789',
        expiryDate: '05/28',
        cardholderName: 'Bob Brown',
        ccv: '321'
    }
];


const Checkout = () => {
    const [addresses, setAddresses] = useState(AddressInfo);
    const [payments, setPaymet] = useState(PaymentsInfo);
    return (
        <div className='container'>
            <div className="row container mt-3">
                <div className="col-8">
                    <FillExampleAddresses addresses={addresses} payments={payments} />
                </div>
                <div className="col-4 mt-5">
                    <div className="container gap-4 ">
                        <SummaryOfCheckOut />
                        <br></br>
                        <Acception />
                        <button className='verification-button'>Save & continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
