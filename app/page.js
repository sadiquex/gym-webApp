import About from "./components/homepage/About";
import Featured from "./components/homepage/Featured";
import Hero from "./components/homepage/Hero";
import ServicesCards from "./components/homepage/ServicesCards";
import GymTrainers from "./components/homepage/GymTrainers";
import Testimonials from "./components/homepage/Testimonials";
import Gallery from "./components/homepage/Gallery";
import CalculateBMI from "./components/homepage/CalculateBMI";
import Pricing from "./components/homepage/Pricing";
export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesCards />
      <About />
      <Featured />
      <GymTrainers />
      <Testimonials />
      <Gallery />
      <CalculateBMI />
      <Pricing />
    </main>
  );
}
