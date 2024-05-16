import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Acception(){
return(
    <>
        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox"
            readOnly
            value="I Accept The Terms Of The Site"/>
        </InputGroup>
    </>
    )
}

export default Acception;