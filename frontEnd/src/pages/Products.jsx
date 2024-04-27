import Yellow from "../assets/Yellow.png";
import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "../api/axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products?`);
        setFilteredProducts(response.data.categories);
        console.log(response.data.categories);
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      }
    };

    if (selectedCategory) {
      fetchFilteredData();
    }
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data.products);
        console.log(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    setIsLoading(false);

    fetchProducts();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <div className="container d-flex  justify-content-center mt-5  ">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>{" "}
        <div className="mx-3 fw-bold text-success fs-5"> Loading... </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-block d-lg-flex container-fuild">
        <Filters onSelectCategory={handleCategorySelect} />
        <div className="container">
          {isLoading && <div>Loading...</div>}

          <h2 className="my-4 fw-bold ">Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className=" col-md-3 ">
                <Card
                  title={product.name}
                  img={`http://localhost:3000/${product.image}`}
                  price={product.price}
                  discount={product.discount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
