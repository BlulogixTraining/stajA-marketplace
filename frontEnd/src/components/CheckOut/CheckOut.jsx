import React, {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './CheckOut.module.css';
import DropdownAddress from './DropDownAddress';
import DropdownPayment from './DropDownPayment';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SummaryOfCheckOut from './SummaryOfCheckOut';

function Addresses({ onSelectAddress, currentAddress }) {
    return (
        <>
            <br></br>
            <h3>Please Choose Your Address:</h3>
            <br></br>
            <h5><span onClick={() => onSelectAddress('Home')} className={currentAddress === 'Home' ? 'selected' : ''}>Home</span></h5>
            <h5><span onClick={() => onSelectAddress('Office')} className={currentAddress === 'Office' ? 'selected' : ''}>Office</span></h5>
            <h5><span onClick={() => onSelectAddress('Workplace')} className={currentAddress === 'Workplace' ? 'selected' : ''}>Workplace</span></h5>
            <h5><span onClick={() => onSelectAddress('School')} className={currentAddress === 'School' ? 'selected' : ''}>School</span></h5>
            <br></br>
            <h5><DropdownAddress/></h5>
        </>
    );
}

function Payments(){
    return(
        <>
            <p>You Are Using Your Payment</p>
            <h3>Please Choose Your Payment Method</h3>
            <br></br>
            <h5>Ziraat</h5>
            <h5>Kuveyt Turk</h5>
            <h5>Halk</h5>
            <h5>Garanti</h5>
            <br></br>
            <h5><DropdownPayment/></h5>
        </>
    )
}

function FillExample({ addresses, payments }) {
    const [selectedAddress, setSelectedAddress] = useState(addresses.find(address => address.type === 'Home'));

    const handleAddressSelect = (selectedType) => {
        const selected = addresses.find(address => address.type === selectedType);
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
                <div className='currentAddress'>
                    <p>Your current address is {selectedAddress.type}</p>
                    <p>{selectedAddress.address}</p>
                </div>
                <Addresses onSelectAddress={handleAddressSelect} currentAddress={selectedAddress.type} />
            </Tab>
            <Tab eventKey="payment" title={<span className="tab-title">Payment</span>}>
                <Payments payments={payments} />
            </Tab>
        </Tabs>
    );
}

const Checkout = () => {

    const [addresses, setAddresses] = useState([
        { type: 'Home', address: 'Suite 493 1743 Feeney Shores, Mayertside, IN 94527-1249' },
        { type: 'Office', address: '37867 Turner Keys, Padbergchester, GA 93440' },
        { type: 'Workplace', address: '868 Stormy Canyon, Keeblermouth, UT 85562-1372' },
        { type: 'School', address: 'Apt. 501 11452 Mante Squares, Imogeneshire, ID 85020-8449' }]);
    const [payments, setPayments] = useState([
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
    ]);

    return(
        <div className='container'>
            <div className="row container mt-3">
                <div className="col-8">
                    <FillExample addresses={addresses} payments={payments}/>
                </div>
                <div className="col-4 mt-5">
                    <div className="container gap-4 ">
                        <SummaryOfCheckOut />
                        <br></br>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <Form.Control aria-label="Text input with checkbox"
                                readOnly
                                value="I Accept The Terms Of The Site"/>
                        </InputGroup>
                        <button className='verification-button'>Save & continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;