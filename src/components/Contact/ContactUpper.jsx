import React, { useEffect } from "react";
import clock from "../../assets/clock.svg";
import address from "../../assets/address.svg";
import phone from "../../assets/phone.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUpper = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="flex items-center justify-center pt-20 flex-col md:flex-row h-full py-10 gap-5 bg-[#f5fcf4]  "
    >
      <div
        id="icon"
        className="flex flex-col gap-2 w-auto p-5 md:w-[300px] h-[300px] items-center justify-center rounded-3xl bg-[#b6c6ba]"
      >
        <img className="" src={clock} alt="" />
        <h1 className="flex">10 AM - 11 PM</h1>
        <p className="flex text-2xl">Opening hour</p>
      </div>
      <div
        id="icon"
        className="flex flex-col gap-2 w-auto p-5 md:w-[300px] h-[300px] items-center justify-center rounded-3xl bg-[#b6c6ba]"
      >
        <img className="" src={address} alt="" />
        <a href="https://www.google.com/maps/place/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84+%EA%B2%BD%EC%82%B0%EC%8B%9C+%EB%91%A5%EC%A7%80%EB%A1%9C+34/data=!3m1!4b1!4m5!3m4!1s0x35660c6b00722563:0x31ddecb2126bb207!8m2!3d35.8414944!4d128.755043">
          <h1 className="flex w-auto">
            34 Dungji-ro, <br /> Gyeongsan,
          </h1>
        </a>
        <p className="flex text-2xl">Address</p>
      </div>
      <div
        id="icon"
        className="flex flex-col gap-2 w-auto p-5 md:w-[300px] h-[300px] items-center justify-center rounded-3xl bg-[#b6c6ba]"
      >
        <img className="" src={phone} alt="" />
        <h1 className="flex">053-281-5070</h1>
        <p className="flex text-2xl">Contact</p>
      </div>
    </div>
  );
};

export default ContactUpper;
