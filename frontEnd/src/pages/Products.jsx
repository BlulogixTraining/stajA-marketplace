import Yellow from "../assets/Yellow.png";
// import { NavLink } from "react-router-dom";
import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, discount: 50 },
    { id: 2, name: "Product 2", price: 100, discount: 50 },
    { id: 3, name: "Product 3", price: 100, discount: 50 },
    { id: 1, name: "Product 1", price: 100, discount: 50 },
    { id: 2, name: "Product 2", price: 100, discount: 50 },
    { id: 3, name: "Product 3", price: 100, discount: 50 },
    { id: 1, name: "Product 1", price: 100, discount: 50 },
    { id: 2, name: "Product 2", price: 100, discount: 50 },
    { id: 3, name: "Product 3", price: 100, discount: 50 },
  ];
  return (
    <>
      <div className="d-block d-lg-flex container ">
        <Filters />
        <div className="container">
          <h2 className="my-4 fw-bold ">Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className=" col-md-4 col-sm-6">
                <Card
                  title={product.name}
                  img={Yellow}
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
