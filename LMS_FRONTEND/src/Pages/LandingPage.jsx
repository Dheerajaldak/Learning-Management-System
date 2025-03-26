import Button from "../../utils/Button";
import HomeLayout from "../Layouts/HomeLayout";
import CallToAction from "./CallToAction";
import Card from "./Card";
import CompanyLogo from "./CompanyLogo";
import CourseSection from "./CourseSection";
import FAQs from "./FAQs";
import Feedback from "./Feedback";
import HomePage from "./HomePage";
import LogoTicker from "./LogoTicker";
import PricingSection from "./PricingSection";
import Reviews from "./Reviews";
import SecondTesti from "./SecondTesti";
import Section from "./Section";
import { SmoothScrollLenis } from "./SmoothScrollLenis";
import TextSlide from "./TextSlide";
import Course2Section from "./Course2Section";
import Subscribe from "./Subscribe";
import Services from "./Services";
import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";

function LandingPage() {
  return (
    <HomeLayout>
      <Hero />
      <CourseSection />
      <Course2Section />
      <CompanyLogo />
      <HomePage />

      <PricingSection />
      <CallToAction />
      <SecondTesti />
      <FAQs />
      <Feedback />
      <Reviews />
     
      <Subscribe />
      <Services />

      <Section />
      <Footer/>

      {/* ////// */}
      {/* <Card /> */}
      {/* <LogoTicker /> */}
      {/* <SmoothScrollLenis /> */}
      {/* <LaunchNotification /> */}
      {/* <TextSlide /> */}
      {/* <Button/>  */}
    </HomeLayout>
  );
}
export default LandingPage;
