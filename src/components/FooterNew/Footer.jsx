import React from "react";
import img1 from "../../assets/Footer/Instagram.svg";
import img2 from "../../assets/Footer/Youtube.svg";
import img3 from "../../assets/Footer/Telegram.svg";
import img4 from "../../assets/Footer/Facebook.svg";
import map from "../../assets/Footer/map.jpg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row h-auto p-10 bg-tertiary items-center w-full justify-evenly">
      <div className="flex flex-col items-start gap-3 ">
        <h2 className="  text-[#dfe0e0] bold text-3xl">Kavsar</h2>

        <p className="text-accent">Address</p>
        <a href="https://www.google.com/maps/place/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84+%EA%B2%BD%EC%82%B0%EC%8B%9C+%EB%91%A5%EC%A7%80%EB%A1%9C+34/data=!3m1!4b1!4m5!3m4!1s0x35660c6b00722563:0x31ddecb2126bb207!8m2!3d35.8414944!4d128.755043">
          <h2 className="text-[20px]">34 Dungji-ro, Gyeongsan,</h2>
        </a>
        <p className="text-accent"> Phone number</p>
        <a href="#">
          <h2 className="text-[20px]">053-281-5070</h2>
        </a>
        <p className="text-accent"> Follow us</p>
        <div className="flex items-center gap-5">
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img1}
            alt=""
          />
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img2}
            alt=""
          />
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img3}
            alt=""
          />
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img4}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="  text-[#dfe0e0] bold text-3xl">Links</h1>
        <h4 id="icon2" className="  text-[#dfe0e0] italic text-xl">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="transition-all duration-300"
          >
            Home
          </Link>
        </h4>
        <h4 id="icon2" className="  text-[#dfe0e0] italic text-xl">
          About
        </h4>
        <h4 id="icon2" className="  text-[#dfe0e0] italic text-xl">
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="transition-all duration-300"
          >
            Contact
          </Link>
        </h4>
        <h4 id="icon2" className="  text-[#dfe0e0] italic text-xl">
          Our menu
        </h4>
        <h4 id="icon2" className="  text-[#dfe0e0] italic text-xl">
          Order now
        </h4>
      </div>
      <div className=" flex flex-col gap-2 w-auto lg:w-96 lg:h-52  ">
        {/* <h1 className="  text-[#dfe0e0] bold text-3xl">Find us on map</h1> */}
        <a href="https://www.google.com/maps/place/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84+%EA%B2%BD%EC%82%B0%EC%8B%9C+%EB%91%A5%EC%A7%80%EB%A1%9C+34/data=!3m1!4b1!4m5!3m4!1s0x35660c6b00722563:0x31ddecb2126bb207!8m2!3d35.8414944!4d128.755043">
          <img id="icon2" className="rounded-2xl" src={map} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
