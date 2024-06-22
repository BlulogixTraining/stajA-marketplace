import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const AddProductDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/product/details", data);
      setSuccessMessage("Product detail added successfully!");
      setTimeout(() => {
        navigate("/dashboard/product-details");
      }, 2000);
    } catch (error) {
      console.error("Error adding product detail:", error);
    }
  };

  return (
    <div className="container p-5">
      <h2>Add Product Detail</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="key">Key</label>
          <input
            type="text"
            className={`form-control ${errors.key ? "is-invalid" : ""}`}
            id="key"
            {...register("key", { required: true })}
          />
          {successMessage && (
            <div className="alert alert-success mt-2">{successMessage}</div>
          )}
          {errors.key && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>

        <button type="submit" className="btn btn-dark mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductDetail;
