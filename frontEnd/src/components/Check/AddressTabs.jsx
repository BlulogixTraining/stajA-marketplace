import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import axios from "../../api/axios";
import { FaTrashAlt } from "react-icons/fa";

const AddressTabs = ({ refetchAddresses, onSelectAddress, addresses }) => {
  // const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState(null);

  const removeAddress = async (id) => {
    try {
      await axios.delete(`/addresses/${id}`);
      addresses.filter((address) => address._id !== id);
      refetchAddresses();
    } catch (err) {
      console.error("Error removing address:", err);
      setError("Error removing address");
    }
  };

  return (
    <div className="mt-5">
      {error && <p>{error}</p>}
      <Tab.Container id="left-tabs-example" defaultActiveKey="address-0">
        <Row>
          <Col sm={4}>
            <Nav variant="pills" className="flex-column">
              {addresses.map((address) => (
                <Nav.Item key={address._id} className="addressAA">
                  <Nav.Link
                    eventKey={`address-${address._id}`}
                    className="d-flex justify-content-between"
                    onClick={() => onSelectAddress(address.name)}
                  >
                    {address.name}{" "}
                    <span onClick={() => removeAddress(address._id)}>
                      <FaTrashAlt />
                    </span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content className="content_container">
              {addresses.map((address) => (
                <Tab.Pane key={address._id} eventKey={`address-${address._id}`}>
                  {address.addressline1}, {address.addressline2}.{" "}
                  {address.country} / {address.city} {address.zipcode}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AddressTabs;
