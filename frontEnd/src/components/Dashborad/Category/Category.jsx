import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { Link } from "react-router-dom";
import AddCategory from "./AddCategory";
import { CircularProgress } from "@mui/material";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get("categories");
      setCategories(response.data.categories);
      setLoading(false);
      console.log("Categories fetched successfully:", response.data);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching categories:", error);
    }
  };
  if (loading) {
    return (
      <div className="container d-flex gap-2 justify-content-center p-5">
        {" "}
        <CircularProgress />
        {loading && <h2>Loading...</h2>}
      </div>
    );
  }
  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`categories/delete/${categoryId}`);
      console.log("Category deleted successfully:", response.data);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-between">
        <h2>Categories</h2>

        <Link className="btn btn-dark mt-2" to="./add">
          Add Category
        </Link>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <th scope="row">{index + 1}</th>
              <td>{category.name}</td>
              <td>
                <button
                  onClick={() => handleDeleteCategory(category._id)}
                  className="bg-secondary text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
