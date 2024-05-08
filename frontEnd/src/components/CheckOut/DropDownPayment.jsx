import React, {useState} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridPayment(){
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Card Number</Form.Label>
            <Form.Control/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Name On Card</Form.Label>
            <Form.Control/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Card Validation Date</Form.Label>
                    <Form.Control />
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>CCV</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

    
            <Button variant="dark" type="submit">
            Submit
            </Button>
        </Form>
        );
}

function DropdownPayment(){
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
                    <GridPayment/>
                </div>
            </Collapse>
        </>
    );
}

export default DropdownPayment;