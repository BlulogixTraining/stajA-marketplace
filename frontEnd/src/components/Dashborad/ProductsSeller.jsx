import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const url = "https://staja-marketplace.onrender.com";
const ProductsSeller = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/seller");
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const removeProduct = async (id) => {
    try {
      await axios.delete(`/products/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="container-fluid p-5 mt-1 mx-2">
      <h2 className="mb-4">Products</h2>
      <Link to="/dashboard/add-product" className="btn btn-dark mb-4">
        Add Product
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={`${url}${product.image[0]}`}
                  alt={product.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description.substring(0, 50)}...</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category_id.name}</td>
              <td>{product.discount}%</td>
              <td className="d-flex flex-column">
                {/* <Link
                  to={`/dashboard/edit-product/${product.slug}`}
                  className="btn btn-primary mt-2"
                >
                  Edit Product
                </Link> */}
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeProduct(product._id)}
                >
                  Delete Product
                </button>
              </td>

              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="pagination" style={{ justifyContent: "center" }}>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              pageNumber === currentPage ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              style={{
                backgroundColor: pageNumber === currentPage ? "black" : "white",
                color: pageNumber === currentPage ? "white" : "black",
              }}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === Math.ceil(products.length / productsPerPage)
              ? "disabled"
              : ""
          }`}
        >
          <button
            className="page-link"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductsSeller;
