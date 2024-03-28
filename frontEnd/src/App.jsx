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
function App() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <Showcase title="NEW ARRIVALS" img={shirt} />
      <Showcase title="TOP SELLING" img={Yellow} />
      <GridCase />
      <Testmonial />
    </>
  );
}

export default App;
