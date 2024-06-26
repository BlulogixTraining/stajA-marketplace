import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SuccessOrder = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/myorders");
    window.location.reload();
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-success">Success!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your order has been successfully placed.</Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleNavigate}>
          My Orders
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessOrder;
