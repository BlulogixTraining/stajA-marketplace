import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { Link } from "react-router-dom";
import AddCategory from "./AddCategory";
const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("categories");
      setCategories(response.data.categories);
      console.log("Categories fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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
    <div className="container py-3 px-2">
      <h2>Categories</h2>
      <div className="mb-3">
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
