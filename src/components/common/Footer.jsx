import React from "react";
import whiteLogo from "../../assets/landingpage/logo-white.svg";
import Input from "./Input";
import insta from "../../assets/landingpage/insta.svg";
import fb from "../../assets/landingpage/fb.svg";
import linkedin from "../../assets/landingpage/linkedin.svg";
import inbox from "../../assets/landingpage/inbox.svg";

const links = [
  "Home",
  "Experiences",
  "How it Works",
  "Contact Us",
  "FAQs",
  "Feedback",
];

const Footer = () => {
  return (
    <footer className="bg-primary-200 px-10 py-16">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 flex flex-col w-3/4">
          <img src={whiteLogo} alt="" className="" />
          <p className="text-secondary-200 body-regular font-light ">
            Lorem ipsum dolor sit amet consectetur. Sit vel consequat ut
            scelerisque quis bibendum. Tincidunt sed lacus odio consectetur.
          </p>
        </div>
        <div className="col-span-1 flex gap-6 flex-col">
          <h2 className="text-white text-bold h7">LINKS</h2>

          {links.map((item, index) => (
            <p key={index} className="body-regular text-secondary-200">
              {item}
            </p>
          ))}
        </div>
        <div className="col-span-2 flex gap-6 flex-col ">
          <h2 className="text-white text-bold h7 uppercase">
            Sign up to our Newsletter
          </h2>
          <p className="body-regular text-secondary-200">
            Be the first to get the exclusive deals and offers, get to hear from
            us every month with our newsletter
          </p>

          <Input placeholder="Eniter Your Email" renderButton />
        </div>
      </div>
      <hr className="my-8 border-1 border-secondary-200" />
      <div className="flex-between">
        <p className="body-regular text-secondary-200">
          copyright of Workdo Ltd. 2024, All Right Reserved.
        </p>
        <div className="flex gap-4">
          <img src={insta} alt="" className="w-10 h-10" />
          <img src={fb} alt="" className="w-8 h-10" />
          <img src={linkedin} alt="" className="w-10 h-10" />
          <img src={inbox} alt="" className="w-10 h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
