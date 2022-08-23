import React from "react";
import BackToTopBtn from "./BackToTopBtn";
import AboutMiddle from "./components/About/AboutMiddle";
import AboutUpper from "./components/About/AboutUpper";
import Testimonials from "./components/CaruselPage/Testimonials";
import ContactForm from "./components/Contact/ContactForm";
import ContactUpper from "./components/Contact/ContactUpper";
import Footer from "./components/FooterNew/Footer";
import HeroPage from "./components/Hero/Hero";

import Header from "./components/Navbar/Header";
import VideoPage from "./components/VideoPage/VideoPage";

const Root = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <AboutUpper />
      <AboutMiddle />
      <VideoPage />
      <Testimonials />
      <ContactUpper />
      <ContactForm />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default Root;
