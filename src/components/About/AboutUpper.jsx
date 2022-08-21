import React from "react";
import img1 from "../../assets/img2.webp";

const AboutUpper = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center justify-evenly w-full gap-5 h-[1000px] px-10 pt-40 lg:pt-10 bg-[#f5fcf4]  "
    >
      <div className="flex">
        <img
          className="flex rounded-2xl border-2 border-black w-auto duration-75 hover:animate-pulse 	 "
          src={img1}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl">Our Story</h1>
        <p className="w-auto text-lg">
          Welcome to Kavsar restaurant. We take pride in delivering warm,
          friendly <br /> service and creating mouth-watering culinary delights
          for all. Using only <br /> the freshest locally sourced ingredients,
          we’ll ensure you have a dining <br /> experience to remember. <br />{" "}
          <br />
          Since 2021, we are the perfect place for a romantic meal for two,{" "}
          <br /> a catch-up with friends, family parties, business meetings, and
          bringing <br /> loved ones together. With comfortable surroundings,
          affordable prices, <br /> and seating for up to 45 guests, we can
          cater for all occasions.
        </p>
      </div>
    </div>
  );
};

export default AboutUpper;
