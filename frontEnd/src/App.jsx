import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero/Hero";
import HeroSlider from "./components/Slider/HeroSlider";

function App() {
  return (
    <>
      <Hero />
      <HeroSlider />
    </>
  );
}

export default App;
