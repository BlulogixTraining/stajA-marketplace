import { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import { useForm } from "react-hook-form";

import axios from "../../api/axios";

const Filters = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const onSubmit = (data) => {
    onSelectCategory(data.category);
    console.log(data.category);
  };

  return (
    <div className={classes.filterMainSquare}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form_check}>
        <h3>Category:</h3>

        {categories.map((category) => (
          <label key={category._id} className="px-2">
            <input
              type="checkbox"
              className="form-check-input fw-bold  fs-5 px-2 mx-1"
              {...register("category")}
              value={category.name}
            />
            {category.name}{" "}
          </label>
        ))}
        <button type="submit" className="mt-5 bg-body-secondary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Filters;
