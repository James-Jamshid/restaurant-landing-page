import React from "react";
import img1 from "../../assets/img4.webp";
import img2 from "../../assets/img5.JPG";
import img3 from "../../assets/img6.webp";

const AboutMiddle = () => {
  return (
    <div className="flex flex-col items-center  w-auto gap-10 h-auto pt-40  px-10 lg:pt-10  bg-[#f5fcf4]  ">
      {/* <div className="flex"> */}
      <h1 className=" text-4xl">Our Goals</h1>
      <p className=" w-auto text-lg text-center">
        We shall sell delicious and remarkable food and beverages that meet the
        highest quality, <br /> freshness, and seasonality criteria while
        combining modern-creative and classic cooking <br /> traditions. By
        showcasing warmth, graciousness, efficiency, skill, professionalism, and
        integrity <br /> in our work, we will continually serve our consumers
        with exceptional service. To have every <br /> customer who comes
        through our doors leave impressed by their experience at Kavsar
        restaurant <br /> and excited to come back again.
      </p>
      <div className="flex items-center gap-5 ">
        <img className=" w-auto lg:w-[400px] lg:h-[700px]" src={img1} alt="" />
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            className=" hidden lg:block w-auto lg:w-[400px] lg:h-[340px]"
            src={img2}
            alt=""
          />
          <img
            className=" hidden lg:block w-auto lg:w-[400px] lg:h-[340px]"
            src={img3}
            alt=""
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutMiddle;
