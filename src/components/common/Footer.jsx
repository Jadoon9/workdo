import React, { useState } from "react";
import whiteLogo from "../../assets/landingpage/logo-white.svg";
import Input from "./Input";
import insta from "../../assets/landingpage/insta.svg";
import fb from "../../assets/landingpage/fb.svg";
import linkedin from "../../assets/landingpage/linkedin.svg";
import inbox from "../../assets/landingpage/inbox.svg";
import { Link, useNavigate } from "react-router-dom";
import InputCommon from "./InputCommon";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addNewsletter } from "../../services/actions/landing";

const links = [
  "Home",
  "Experiences",
  "How it Works",
  "Contact Us",
  "FAQs",
  "Feedback",
];

const Footer = () => {
  const [newsLetter, setNewsLetter] = useState("");
  const { mutate: mutateNewsLetter, isPending: pendingNewsLetter } =
    useMutation({
      mutationFn: addNewsletter,
      onError: (data) => {
        console.log(data, "jkjkj");
        toast.error(data?.response?.data?.email[0]);
      },
      onSuccess: () => {
        toast.success("Successfully Subscribed");
        setNewsLetter("");
      },
    });

  return (
    <footer className="bg-primary-200 w-full paddingXS lg:paddingX py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-12">
        <div className="col-span-12 md:col-span-5 flex flex-col w-full md:w-3/4 space-y-6">
          <img src={whiteLogo} alt="" className="w-60" />
          <p className="text-secondary-200 body-regular lg:body-regular1 font-light text-start md:text-left">
            Lorem ipsum dolor sit amet consectetur. Sit vel consequat ut
            scelerisque quis bibendum. Tincidunt sed lacus odio consectetur.
          </p>
        </div>
        <div className="col-span-12 md:col-span-2 flex flex-col md:items-start space-y-4 md:space-y-6">
          <h2 className="text-white neue700 h7">LINKS</h2>
          {links.map((item, index) => (
            <Link
              to={item === "FAQs" ? "/faq" : ""}
              key={index}
              className="body-regular lg:body-regular1 text-secondary-200"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col md:items-start space-y-4 md:space-y-6">
          <h2 className="text-white neue700 h7 uppercase !leading-normal">
            Sign up to our Newsletter
          </h2>
          <p className="body-regular lg:body-regular1 text-secondary-200">
            Be the first to get the exclusive deals and offers, get to hear from
            us every month with our newsletter
          </p>
          <div className="w-full">
            <InputCommon
              placeholder="Enter Your Email"
              renderButton
              handleInputChange={(e) => {
                setNewsLetter(e.target.value);
              }}
              value={newsLetter}
              pending={pendingNewsLetter}
              buttonOnClick={() => mutateNewsLetter({ email: newsLetter })}
              renderButton
            />
          </div>
        </div>
      </div>

      <hr className="my-8 border-1 border-secondary-200" />
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-start md:text-left body-regular lg:body-regular1  text-secondary-200">
          Copyright of Workdo Ltd. 2024, All Rights Reserved.
        </p>
        <div className="flex gap-4 justify-start md:justify-end mt-4 md:mt-0">
          <a href="https://www.instagram.com/workdo.co.uk/" target="_blank">
            <img src={insta} alt="" className="w-10 h-10" />
          </a>
          <a href="https://www.facebook.com/workdo.co.uk" target="_blank">
            <img src={fb} alt="" className="w-8 h-10" />
          </a>
          <a href="https://www.linkedin.com/company/workdouk" target="_blank">
            <img src={linkedin} alt="" className="w-10 h-10" />
          </a>
          <a href="mailto:emma@workdo.co.uk">
            <img src={inbox} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
