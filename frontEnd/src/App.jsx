import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero/Hero";
import HeroSlider from "./components/Slider/HeroSlider";
import Showcase from "./components/Showcase/Showcase";
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
        const response = await axios.get(
          "https://staja-marketplace.onrender.com/products"
        );
        setFeaturedProducts(response.data.products);
        // console.log(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchFeaturedProducts();
  }, []);

  const slicedProducts = featuredProducts.slice(0, 4);

  console.log("slicedProducts", slicedProducts);
  return (
    <>
      <Hero />
      <HeroSlider />
      <Showcase Showtitle="New Arrivals" products={slicedProducts} />

      <Showcase Showtitle="Hot Products" products={slicedProducts} />
      <GridCase />
      <Testmonial />
    </>
  );
}

export default App;
