import React, {useState} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridAddress() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control placeholder="1234 Main St" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
    
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control />
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
            >
            Or Click To Add One
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <br></br>
                    <GridAddress/>
                </div>
            </Collapse>
        </>
    );
}

export default DropdownAddress;