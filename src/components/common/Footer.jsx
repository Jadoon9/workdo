import React from "react";
import whiteLogo from "../../assets/landingpage/logo-white.svg";
import Input from "./Input";
import insta from "../../assets/landingpage/insta.svg";
import fb from "../../assets/landingpage/fb.svg";
import linkedin from "../../assets/landingpage/linkedin.svg";
import inbox from "../../assets/landingpage/inbox.svg";
import { Link, useNavigate } from "react-router-dom";

const links = [
  "Home",
  "Experiences",
  "How it Works",
  "Contact Us",
  "FAQs",
  "Feedback",
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-primary-200 paddingXS lg:paddingX py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-1 md:col-span-2 flex flex-col w-full md:w-3/4 space-y-6">
          <img src={whiteLogo} alt="" className="w-60" />
          <p className="text-secondary-200 body-regular lg:body-regular1 font-light text-start md:text-left">
            Lorem ipsum dolor sit amet consectetur. Sit vel consequat ut
            scelerisque quis bibendum. Tincidunt sed lacus odio consectetur.
          </p>
        </div>
        <div className="col-span-1 flex flex-col md:items-start space-y-4 md:space-y-6">
          <h2 className="text-white text-bold h7">LINKS</h2>

          {links.map((item, index) => (
            <Link
              to={item === "FAQs" ? "/faq" : ""}
              key={index}
              className="body-regular lg:body-regular1  text-secondary-200"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col md:items-start  space-y-4 md:space-y-6">
          <h2 className="text-white text-bold h7 uppercase !leading-normal">
            Sign up to our Newsletter
          </h2>
          <p className="body-regular lg:body-regular1  text-secondary-200">
            Be the first to get the exclusive deals and offers, get to hear from
            us every month with our newsletter
          </p>

          <div className="w-full">
            <Input placeholder="Enter Your Email" renderButton />
          </div>
        </div>
      </div>
      <hr className="my-8 border-1 border-secondary-200" />
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-center md:text-left body-regular lg:body-regular1  text-secondary-200">
          Copyright of Workdo Ltd. 2024, All Rights Reserved.
        </p>
        <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
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
