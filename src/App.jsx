import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import CalculateBmi from "./components/CalculateBmi";
import Schedule from "./components/Schedule";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <CalculateBmi />
      <Schedule />
      <Reviews />
      <Pricing />
      <Coaches />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
