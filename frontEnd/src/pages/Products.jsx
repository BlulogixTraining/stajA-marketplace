import { NavLink, Outlet } from "react-router-dom";
import TobNav from "../components/Navbar/Navbar";
import HeroSlider from "../components/Slider/HeroSlider";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];
  return (
    <>
      <div>
        <h1>Products</h1>
        <HeroSlider />

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
