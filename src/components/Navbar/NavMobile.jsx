import React, { useState } from "react";
//import navigation data
import { navigation } from "../../data";
// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
//import components
import Socials from "./Socials";
//import framer motion
import { motion } from "framer-motion";
//import Link
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);
  //framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-[#1C1D24] fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8 text-white" />
        </div>

        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8 hover:scale-110 duration-75">
              <Link
                // onClick={handleClick}
                onClick={() => setIsOpen(false)}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-2xl cursor-pointer hover:text-accent-hover
              capitalize "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <div className=" flex flex-col gap-2">
          <button className=" bg-[#004c0d] hover:bg-accent-hover rounded-lg text-xl text-white cursor-pointer hover:bg-hover w-[150px] h-[40px]">
            Our Menu
          </button>
          <button className=" bg-orange hover:bg-orange-hover rounded-lg text-xl text-white cursor-pointer hover:bg-hover w-[150px] h-[40px]">
            Order Now
          </button>
        </div>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
