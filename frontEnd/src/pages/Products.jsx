import { NavLink, Outlet } from "react-router-dom";
import Filters from "../components/Filters/Filters";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];
  return (
    <>
      <div className="d-block d-lg-flex">
        <Filters />
        <h1>Products</h1>

        {products.map((product) => (
          <div key={product.id}>
            <NavLink to={`/products/${product.id}`}>{product.name}</NavLink>
          </div>
        ))}

        <Outlet />
      </div>
    </>
  );
};

export default Products;