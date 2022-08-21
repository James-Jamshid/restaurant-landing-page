import React from "react";
//import navigation
import { navigation } from "../../data";
//import Link
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize bold text-[25px]">
        {navigation.map((item, index) => {
          return (
            <li
              className=" hover:text-accent cursor-pointer text-white"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
