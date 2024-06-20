import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
import { useEffect, useMemo, useState } from "react";
import axios from "../api/axios";
import Breadcrumbs from "../components/ui/Breadcrumb";
import Pagination from "../components/ui/Pagination";
const url = "https://staja-marketplace.onrender.com";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectedValuesChange = (values) => {
    setSelectedValues(values);
    // setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        let productsUrl = `${url}/products`;
        const params = new URLSearchParams();
        if (selectedValues.length > 0) {
          params.append("variants", selectedValues.join(","));
        }
        params.append("page", currentPage);
        productsUrl += `?${params.toString()}`;
        console.log(productsUrl);
        const response = await axios.get(productsUrl);

        setProducts(response.data.products);
        setTotalPages(response.data.pages);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedValues, currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const memoizedCurrentPage = useMemo(() => currentPage, [currentPage]);

  console.log("products");
  return (
    <>
      <div className=" container-fuild">
        <div className="container">
          <Breadcrumbs />

          <h2 className="my-4 fw-bold ">Products</h2>
          <div className="row">
            <div className="col col-md-3 position-relative">
              <Filters
                onSelectedValuesChange={handleSelectedValuesChange}
                products={products}
              />
            </div>
            <div className="col d-flex flex-wrap justify-content-center justify-content-lg-start mt-3 mt-md-0 gap-4 gap-md-0   ">
              {products.map((product) => (
                <div
                  key={product._id}
                  className={`col col-md-5 gap-md-6 col-lg-4 mb-5 position-relative `}
                >
                  {/* <span className={`heart-icon ${classes.favorite_heart}`}>
                    <WishlistHeart productId={product._id} />
                  </span> */}
                  <Card
                    productSlug={product.slug}
                    name={product.name}
                    rating={product.averagerating}
                    img={`${url}${product.image[0]}`}
                    price={product.price}
                    discount={product.discount}
                  />{" "}
                </div>
              ))}
            </div>
          </div>
          <Pagination
            current={memoizedCurrentPage}
            pages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="container-fluid"></div>
    </>
  );
};

export default Products;
