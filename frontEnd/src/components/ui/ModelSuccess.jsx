import Modal from "react-bootstrap/Modal";

const ModelSuccess = ({ onRedirect, ...props }) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center pt-5">
        <h4>Welcome To ShopCO</h4>
        <p>
          We are happy to have you here. <br />
          You can now start shopping
        </p>
      </Modal.Body>
      <Modal.Footer className="p-1">
        <a
          onClick={() => {
            props.onHide();
            onRedirect();
          }}
          className="bg-danger btn btn-dark"
        >
          Close
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelSuccess;
