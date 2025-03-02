import CallToAction from "@/components/CallToAction";
import Camp from "@/components/Camp";
import Contact from "./contact/page";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import HowItWorks from "@/components/HowItWorks";
import Services from "./services/page";
import PopularDestinations from "@/components/PopularDestinations";
import WhyChooseUs from "@/components/WhyChooseUS";


export default function Home() {
  return (
    <>

      <link rel="icon" href="/favicon.ico"></link>
      
      <Hero2 />
      <PopularDestinations />
      <Camp />
      <Services/>
      <HowItWorks />
      <CallToAction />
      <Guide />
      <Gallery />
      <WhyChooseUs />
      <Contact />
    </>
  );
}


