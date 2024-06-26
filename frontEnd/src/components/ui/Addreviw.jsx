import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RatingStarts from "./RatingStarts";
import axios from "../../api/axios";

const url = "https://staja-marketplace.onrender.com";
const Addreviw = ({ ratedId }) => {
  const [show, setShow] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitting(false);
  };
  const handleShow = () => setShow(true);
  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    const reviewData = {
      review: data.review,
      rating: selectedRating,
      product_id: ratedId,
    };
    try {
      const response = await axios.post(
        `${url}/reviews/${ratedId}`,
        reviewData
      );
      console.log("Review submitted successfully:", response.data);
      reset(); // Reset form fields
      setSelectedRating(0); // Reset star rating
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setSubmitting(false);
      handleClose(); // Close the modal after submission attempt
    }
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Write a Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RatingStarts
              star={selectedRating}
              onChange={handleRatingChange}
              isWritable="true"
            />
            <input {...register("review", { required: true })} />
            <input
              type="submit"
              value={submitting ? "Submitting..." : "Submit"}
              disabled={isSubmitting || !isValid}
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Addreviw;
