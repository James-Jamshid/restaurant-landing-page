import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  //change nav color when scroll
  const [color, setColor] = useState();
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={`${bg ? "bg-[#f5fcf4] h-20 " : "h-24"} 
    flex items-center justify-center fixed top-0 w-full text-white z-10 transition all duration-300  bg-[rgba(0,0,0,.9)]`}
    >
      <div className="container mix-auto h-full flex items-center justify-between bold ">
        <h1 className="bold text-2xl text-white">Kavsar</h1>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className=" hidden lg:flex gap-2">
          <button className=" bg-[#004c0d] hover:bg-[#003309] rounded-lg text-white cursor-pointer hover:bg-hover w-auto md:w-[150px] h-[40px]">
            Explore Menu
          </button>
          <button className=" bg-orange hover:bg-orange-hover rounded-lg text-white cursor-pointer hover:bg-hover w-auto md:w-[150px] h-[40px]">
            Order Now
          </button>
        </div>
        {/* socials */}
        {/* <div className="hidden lg:block">
          <Socials />
        </div> */}
        {/* nav mobile */}
        <div className=" lg:hidden">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
