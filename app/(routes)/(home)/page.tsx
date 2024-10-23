import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";
import { HowItWorks } from "./components/HowItWorks";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}
