import React from "react";
import img1 from "../../assets/img1.webp";

const HeroPage = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center justify-evenly w-full gap-5 h-[1000px] px-10 pt-40 lg:pt-10 bg-[#f5fcf4]  "
    >
      {/* right start */}
      <div className="flex items-center lg:items-start justify-center flex-col gap-10 ">
        <h1 className="text-4xl">The flavor of tradition</h1>
        <p className="w-auto text-2xl">
          We are a multi-cuisine restaurant offering a wide variety <br /> of
          food experience in both casual and fine dining environment.
        </p>
        <div className="flex gap-2">
          <button className=" bg-[#004c0d] hover:bg-[#003309] rounded-lg text-white cursor-pointer hover:bg-hover w-auto md:w-[250px] h-[60px] p-3 items-center justify-center">
            Explore Menu
          </button>
          <button className=" bg-orange hover:bg-orange-hover rounded-lg text-white cursor-pointer hover:bg-hover w-auto md:w-[250px] h-[60px] p-3 items-center justify-center">
            Order Now
          </button>
        </div>
      </div>
      {/* right end */}
      {/* left start */}
      <div className="flex "></div>
      <div className="flex ">
        <img
          className="flex rounded-2xl border-2 border-black w-auto duration-75 hover:animate-pulse 	 "
          src={img1}
          alt=""
        />
      </div>
      {/* left end */}
    </div>
  );
};

export default HeroPage;
