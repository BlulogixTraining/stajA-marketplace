import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product details when the component mounts
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send updated product details to the API
      await axios.put(`{{baseURL}}/products/${id}`, product);
      // Redirect to the products page after successful update
      // history.push('/products');
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
      {/* <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={product.description || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form> */}
    </div>
  );
};

export default EditProductPage;
