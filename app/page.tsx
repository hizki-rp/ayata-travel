import CallToAction from "@/components/CallToAction";
import Camp from "@/components/Camp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import HowItWorks from "@/components/HowItWorks";
import PopularDestinations from "@/components/PopularDestinations";
import WhyChooseUs from "@/components/WhyChooseUS";


export default function Home () {
  return (
    <>
      <Hero2 />
      <PopularDestinations />
      <Camp />
      <HowItWorks />
      <CallToAction />
      <Guide />
      <Gallery />
      <WhyChooseUs />
      <Contact />
    </>
  );
}


 