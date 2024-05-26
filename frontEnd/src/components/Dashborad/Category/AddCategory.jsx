import { useForm } from "react-hook-form";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("categories", data);
      console.log("Category added successfully:", response.data);
      reset();
      navigate("/dashboard/categories");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form
        className="col-3"
        id="categoryForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
