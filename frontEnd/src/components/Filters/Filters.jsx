import { useEffect, useState } from "react";
import classes from "./Filters.module.css";
const url = "https://staja-marketplace.onrender.com";

import axios from "../../api/axios";

const Filters = ({ onSelectedValuesChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${url}/categories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const [selectedValues, setSelectedValues] = useState([]);

  // Handler to update selected values
  const onFilterChange1 = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  useEffect(() => {
    onSelectedValuesChange(selectedValues);
  }, [selectedValues, onSelectedValuesChange]);

  return (
    <div className={classes.filterMainSquare}>
      <div className="d-flex flex-column mb-3">
        <h3 className={classes.cat_title}>Category:</h3>
        {categories.map((category) => (
          <label key={category._id} className="px-2">
            <input
              id={category._id}
              type="checkbox"
              className="form-check-input fw-bold  fs-5 px-2 mx-1"
              value={category.slug}
              onChange={onFilterChange1}
              checked={selectedValues.includes(category.slug)}
            />
            {category.name}
          </label>
        ))}
      </div>
      {/* <div className="d-flex flex-column">
        <h3 className={classes.cat_title}>Category:</h3>
        {categories.map((category) => (
          <label key={category._id} className="px-2">
            <input
              id={category._id}
              type="checkbox"
              className="form-check-input fw-bold  fs-5 px-2 mx-1"
              value={category.slug}
              onChange={onFilterChange1}
              checked={selectedValues.includes(category.slug)}
            />
            {category.name}
          </label>
        ))}
      </div> */}
    </div>
  );
};

export default Filters;
