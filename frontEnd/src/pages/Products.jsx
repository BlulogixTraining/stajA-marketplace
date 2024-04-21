import Yellow from "../assets/Yellow.png";
import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "../api/axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data.products.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    setIsLoading(false);

    fetchProducts();
  }, []);

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

  console.log(products);
  return (
    <>
      <div className="d-block d-lg-flex container-fuild ">
        <Filters />
        <div className="container">
          {isLoading && <div>Loading...</div>}

          <h2 className="my-4 fw-bold ">Products</h2>
          <div className="row">
            {products.map(
              (product) => (
                console.log(product.image),
                (
                  <div key={product.id} className=" col-md-4 ">
                    <Card
                      title={product.name}
                      img={Yellow}
                      price={product.price}
                      discount={product.price}
                    />
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
