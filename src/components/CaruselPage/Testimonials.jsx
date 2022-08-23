import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="section bg-[#f5fcf4]">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center text-center">
          {/* <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:top-[2rem] before:-left-64 before:hidden before:lg:block">
            I am as a Frond End Developer
          </h2> */}
          <p className="subtitle text-2xl p-10">
            Quality of Service, Food, Ambiance, and Value of Money are the{" "}
            <br />
            primary elements for choosing a restaurant. Kavsar restaurant is one{" "}
            <br />
            of the most exquisite fine-dinning restaurant in Daegu city <br />
            perfect ambiance, and scrumptious food.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
