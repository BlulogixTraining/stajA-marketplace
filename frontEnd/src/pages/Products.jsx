import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
const url = "https://staja-marketplace.onrender.com";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectedValuesChange = (values) => {
    setSelectedValues(values);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        let productsUrl = `${url}/products`;
        if (selectedValues.length > 0) {
          const categories = new URLSearchParams({
            categories: selectedValues.join(","),
          });
          productsUrl += `?${categories.toString()}`;
        }
        const response = await axios.get(productsUrl);
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, [selectedValues]);
  return (
    <>
      <div className="d-block d-sm-flex container-fuild">
        <div className="container">
          <h2 className="my-4 fw-bold ">Products</h2>
          <div className="row">
            <div className="col col-md-3">
              <Filters
                onSelectedValuesChange={handleSelectedValuesChange}
                products={products}
              />
            </div>
            <div className="col d-flex flex-wrap justify-content-center justify-content-lg-start mt-3 mt-md-0 gap-4 gap-md-0   ">
              {products.map((product) => (
                <div key={product.id} className={`col col-md-4 mb-5  `}>
                  <Link to={`/products/${product.slug}`} className="text-black">
                    <Card
                      name={product.name}
                      img={`${url}${product.image[0]}`}
                      price={product.price}
                      discount={product.discount}
                    />{" "}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
