import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero/Hero";
import HeroSlider from "./components/Slider/HeroSlider";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <Showcase title="NEW ARRIVALS" />
    </>
  );
}

export default App;
