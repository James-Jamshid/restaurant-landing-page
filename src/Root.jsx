import React from "react";
import BackToTopBtn from "./BackToTopBtn";
import AboutUpper from "./components/About/AboutUpper";
import ContactForm from "./components/Contact/ContactForm";
import ContactUpper from "./components/Contact/ContactUpper";
import Footer from "./components/FooterNew/Footer";
import HeroPage from "./components/Hero/Hero";

import Header from "./components/Navbar/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <AboutUpper />
      <ContactUpper />
      <ContactForm />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default Root;
