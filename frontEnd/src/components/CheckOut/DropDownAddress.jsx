// import React, {useState} from 'react';
// import axios from '../../api/axios';
// import Collapse from 'react-bootstrap/Collapse';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import { useForm } from "react-hook-form";
// const url = "https://jsonplaceholder.typicode.com/posts";

// function GridAddress() {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             name: "School",
//             addressLine1: "Basibuyuk Mah",
//             addressLine2: "Sureyyepasa Cad",
//             city: "Istanbul",
//             state: "Maltepe",
//             zipcode: "46597",
//         },
//     });

//     const onSubmit = async (data) => {
//         try {
//             const res = await axios.post(url, JSON.stringify(data));
//             console.log(res);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return (
//         <Form onSubmit={handleSubmit(onSubmit)}>
//             <Form.Group className="mb-3" controlId="formGridAddress0">
//                 <Form.Label>Name Of The Address</Form.Label>
//                 <Form.Control {...register("name")} placeholder="" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGridAddress1">
//                 <Form.Label>Address Line 1</Form.Label>
//                 <Form.Control {...register("addressLine1")} placeholder="" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGridAddress2">
//                 <Form.Label>Address Line 2</Form.Label>
//                 <Form.Control {...register("addressLine2")} placeholder="" />
//             </Form.Group>

//             <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridCity">
//                     <Form.Label>City</Form.Label>
//                     <Form.Control {...register("city")} />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridState">
//                     <Form.Label>State</Form.Label>
//                     <Form.Control {...register("state")} />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridZip">
//                     <Form.Label>Zip Code</Form.Label>
//                     <Form.Control {...register("zipcode")} />
//                 </Form.Group>
//             </Row>

//             <Button variant="dark" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     );
// }

// function DropdownAddress() {
//     const [open, setOpen] = useState(false);
//     return (
//         <>
//             <Button
//                 onClick={() => setOpen(!open)}
//                 aria-controls="example-collapse-text"
//                 aria-expanded={open}
//                 variant="dark"
//                 className='mt-2'
//             >
//             Or Click To Add One
//             </Button>
//             <Collapse in={open}>
//                 <div id="example-collapse-text">
//                     <br></br>
//                     <GridAddress />
//                 </div>
//             </Collapse>
//         </>
//     );
// }

// export default DropdownAddress;