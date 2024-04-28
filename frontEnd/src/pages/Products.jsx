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
  // console.log(products[0].image);
  return (
    <>
      <div className="d-block d-lg-flex container-fuild">
        <Filters
          onSelectedValuesChange={handleSelectedValuesChange}
          products={products}
        />
        <div className="container">
          {/* {isLoading && <div>Loading...</div>} */}

          <h2 className="my-4 fw-bold ">Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className=" col-md-3 ">
                {" "}
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
    </>
  );
};

export default Products;
