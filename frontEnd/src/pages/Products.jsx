import Showcase from "../components/Showcase/Showcase";
import shirt from "../assets/shirt.jpg";
import Yellow from "../assets/Yellow.png";
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
          <div>
            <h1>Products</h1>
            {products.map((product) => (
              <div key={product.id}>
                <NavLink to={`/products/${product.id}`}>{product.name}</NavLink>
              </div>
            ))}
          
          <div className="d-block d-lg-flex">
            <Showcase title="" img={shirt} />
            <Showcase title="" img={Yellow} />
            <Showcase title="" img={shirt} />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Products;