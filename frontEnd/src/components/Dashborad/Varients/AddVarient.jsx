import { set, useForm } from "react-hook-form";
import axios from "../../../api/axios";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import { redirect, useNavigate } from "react-router-dom";
const AddVarient = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    data.values = data.values.split(",").map((value) => value.trim());

    try {
      const response = await axios.post("/variants/create", data);
      setSuccessMessage("Variant added successfully!");
      setErrorMessage("");
      reset();
      console.log("Response:", response.data);
      setTimeout(() => {
        navigate("/dashboard/varients");
      }, 2000);
    } catch (error) {
      setErrorMessage("Error adding variant.");
      setSuccessMessage("");
      console.error("Error adding variant:", error);
    }
  };

  return (
    <div className="container p-5">
      <h2>Add Variant</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            {...register("category", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Values (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            {...register("values", { required: true })}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: grey[800] }}
          className="mt-3 text-white "
        >
          Add Variant
        </button>
      </form>
    </div>
  );
};

export default AddVarient;
