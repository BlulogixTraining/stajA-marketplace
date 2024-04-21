import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero/Hero";
import HeroSlider from "./components/Slider/HeroSlider";
import Showcase from "./components/Showcase/Showcase";
import shirt from "../src/assets/shirt.jpg";
import Yellow from "../src/assets/Yellow.png";
import GridCase from "./components/GridCase/GridCase";
import Testmonial from "./components/Testmonials/Testmonials";
import { useEffect, useState } from "react";
import axios from "./api/axios";
function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/products");

        setFeaturedProducts(response.data.products.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let showcaseProps = {
    title: "",
    img: "",
    price: 0,
    discount: 0,
  };

  if (featuredProducts.length > 0) {
    const firstProduct = featuredProducts[0];
    showcaseProps = {
      title: firstProduct.name,
      img: Yellow,
      price: firstProduct.price,
      discount: firstProduct.price,
    };
  }
  return (
    <>
      <Hero />
      <HeroSlider />
      <Showcase headtitle="New" {...showcaseProps} />

      <Showcase headtitle="Hot" {...showcaseProps} />
      <GridCase />
      <Testmonial />
    </>
  );
}

export default App;
