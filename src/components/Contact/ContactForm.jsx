import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      // data-aos="fade-left"
      id="contact"
      className="flex flex-col gap-10  items-center justify-center h-[700px] bg-[#f5fcf4] "
    >
      <div className="flex">
        <h1 className="">Contact & Inquiry</h1>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/b272bcd8-0396-4724-bcd6-8aabf15534e3"
        className="space-y-8 w-full max-w-[780px]"
      >
        <div className="flex gap-8 ">
          <input
            name="name"
            type="text"
            className="input "
            placeholder="Your name"
          />
          <input
            name="mail"
            type="email"
            className="input"
            placeholder="Your email"
          />
        </div>
        <input
          name="message"
          type="text"
          className="input"
          placeholder="Subject"
        />
        <textarea placeholder="Your message" className="textarea"></textarea>
        <button className="btn btn-lg bg-[#004c0d] rounded-lg hover:bg-[#003309]">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
