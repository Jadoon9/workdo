import hero from "../assets/landingpage/hero.svg";
import Button from "../components/common/Button";
import workplace from "../assets/landingpage/workplace.svg";
import ratings from "../assets/landingpage/Rating.svg";
import about from "../assets/landingpage/about.svg";
import checkIcon from "../assets/landingpage/check.svg";
import star from "../assets/landingpage/star.svg";
import location from "../assets/landingpage/location.svg";
import users from "../assets/landingpage/users.svg";
import s from "../assets/landingpage/s.svg";
import users2 from "../assets/landingpage/users2.svg";
import starIcon from "../assets/landingpage/stars.svg";
import foodImage from "../assets/landingpage/food.svg";
import Input from "../components/common/Input";
import InstaIcon from "../assets/landingpage/insta.svg";
import linkedIn from "../assets/landingpage/linkedin.svg";
import facebook from "../assets/landingpage/fb.svg";
import faq from "../assets/landingpage/faq.svg";
import minutes from "../assets/landingpage/minutes.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <section className=" paddingX grid grid-cols-2 my-10 items-center">
        <div className="gap-y-2 my-28">
          <h1 className="h1-bold font-[800] text-primary-200">
            Work events <br /> done right.
          </h1>
          <div className="flex gap-3 my-6 ">
            <Button
              text="SUBMIT EVENT DETAILS"
              bgColor="bg-primary-200"
              textColor="text-white"
              paddingX="6"
              paddingY="2"
              onClick={() => navigate("/submit-event")}
            />
            <Button
              text="BROWSE EXPERIENCE"
              textColor="primary-200"
              paddingX="6"
              paddingY="2"
              onClick={() => navigate("/browse-events")}
            />
          </div>
          <div className="w-5/6">
            <Button
              text="LIST YOUR BUSINESS"
              textColor="primary-200"
              width="full"
              paddingX="6"
              paddingY="2"
            />
          </div>
        </div>
        <div className="flex-center">
          <img src={hero} className="" alt="hero" />
        </div>
      </section>
      <div className="bg-primary-100 py-10 flex-center">
        <h2 className="uppercase h4 text-[#F8F6EE]">
          TEAM BUILDING • ENTERTAINMENT • WORKPLACE WELLBEING
        </h2>
      </div>

      <section className="paddingX grid grid-cols-2 gap-4 my-14">
        <div className="relative">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[...Array(3)].map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={ratings} alt="ratings" className="my-6" />
                  <p className="body-regular ">
                    Lorem ipsum dolor sit amet consectetur. Etiam et cras sit
                    quisque tortor. Eget in vel mattis quis ultricies libero
                    pharetra. Porta tristique nunc viverra vitae cursus massa.
                    Eget at amet tristique ultrices auctor.Lorem ipsum dolor sit
                    amet consectetur. Etiam et cras sit quisque tortor. Eget in
                    vel mattis quis ultricies libero pharetra. Porta tristique
                    nunc viverra vitae cursus massa. Eget at amet tristique
                    ultrices auctor.
                  </p>
                  <h5 className="mt-6 text-primary h7">Adam Hales</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-end">
          <img src={workplace} alt="workplace" />
        </div>
      </section>

      <div className="paddingX w-1/2 my-2">
        <h2 className="h2 text-primary-200">
          Ideas to <br /> get started
        </h2>
        <p className="body-regular">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>
      </div>
      <section className="paddingX grid grid-cols-3 gap-8 my-14">
        {[...Array(3)].map((item, index) => (
          <div key={index}>
            <img src={about} alt="" className="rounded-[16px] w-full" />
            <div className="flex items-center gap-x-4 mt-6">
              <h2 className="h6 uppercase text-primary-200 neue700">Name</h2>
              <img src={checkIcon} alt="check" />
            </div>
            <div className="flex items-center gap-6 mt-4">
              <img src={star} alt="star" />
              <p className="body-regular text-primary-100">4.5 (210)</p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <img src={location} className="w-4" alt="star" />
              <p className="body-regular text-primary-100">London, UK</p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <img src={users} alt="star" />
              <p className="body-regular text-primary-100">45 Persons</p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <img src={s} alt="star" />
              <p className="body-regular text-primary-100">$45-$100</p>
            </div>
            <div className="my-6">
              <Button text="browse experience" width="full" />
            </div>
          </div>
        ))}
      </section>

      <div className="paddingX w-1/2 my-12">
        <h2 className="h2 text-primary-200 neue800 ">
          At work do <br /> we believe
        </h2>
      </div>
      <section className="paddingX grid grid-cols-3 gap-8 my-14">
        {[...Array(3)].map((item, index) => (
          <div key={index}>
            <img src={users2} alt="" />
            <h2 className="h5 uppercase my-6 neue700  text-primary-50">
              Team Experiences
            </h2>
            <p className="body-regular">
              Vitae congue eu consequat ac felis placerat vestibulum lectus
              mauris ultrices. Cursus sit amet dictum sit amet justo donec enim
              diam porttitor lacus luctus accumsan tortor posuere.
            </p>
          </div>
        ))}
      </section>

      <section className="paddingX w-1/2 my-10">
        <h2 className="h2 text-primary-200">
          Why collab
          <br /> with Us
        </h2>
      </section>

      <section className="grid grid-cols-12 gap-x-10">
        <div className="col-span-7 bg-primary-100 paddingX py-12 h-[600px]">
          {[...Array(3)].map((item, index) => (
            <div className="flex gap-8 space-y-10" key={index}>
              <img src={starIcon} alt="star" />
              <p className="body-regular text-secondary-200">
                Lorem ipsum dolor sit amet consectetur. Etiam et cras sit
                quisque tortor. Eget in vel mattis quis ultricies libero
                pharetra. Porta tristique nunc viverra vitae cursus massa. Eget
                at amet tristique ultrices auctor.
              </p>
            </div>
          ))}
          <div className="ml-16 mt-16">
            <Button
              text="List your business"
              width="full"
              textColor="text-white"
              borderWhite
            />
          </div>
        </div>
        <div className="col-span-5 pr-10 h-[600px]">
          <img
            src={foodImage}
            alt="foodImage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex justify-between items-center paddingX space-x-32 w-full my-16">
        <div className=" my-10 w-1/3 text-primary-200">
          <h2 className="h2-57 text-primary-200 ">
            Sign up to our
            <br /> <span className="">newsletter</span> <br />
            for inspiration
          </h2>
        </div>

        <div className="w-2/3">
          <div className="flex flex-col gap-8 ">
            <Input
              type="text"
              placeholder="Enter Your Email"
              handleInputChange={() => console.log("hhghgh")}
              renderButton
            />
            <p className="body-medium mx-auto capitalize text-primary-100 font-light">
              Your email is safe with us, we dont spam.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-100">
        <div className="paddingX flex gap-96 justify-between ">
          <h2 className="h2 text-secondary-200 py-8">
            Follow US On <br />
            social media
          </h2>
          <div className="flex items-center flex-1 gap-16">
            <img src={InstaIcon} alt="InstaIcon" />
            <img src={facebook} alt="facebook" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
      </section>

      <section className="paddingX my-12">
        <h2 className=" text-primary-200 h2 uppercase  pt-10 pb-2">
          Frequently asked <br />
          questions
        </h2>
        <p className="w-1/2 text-start">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>

        <div className="flex my-12 gap-4 ">
          {[...Array(3)].map((item, index) => (
            <div
              className="bg-white rounded-[18px] border-4 border-primary-100 px-4 py-8"
              key={index}
            >
              <img src={faq} alt="" className="my-4" />
              <h5 className="body-regular font-extrabold text-primary-50">
                Enim diam porttitor lacus luctus accumsan dsa tortor posuere.
              </h5>
              <p className="text-gray-50 my-2 text-[18px]">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10 paddingX w-full">
        <h2 className=" text-primary-200 h2 uppercase  pt-10 pb-2">Minutes</h2>
        <p className="body-regular text-primary-50 w-[60%]">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>
      </section>

      <section className="paddingX  p-8 w-full">
        <div className="flex justify-center gap-8 w-full">
          {[...Array(3)].map((item, index) => (
            <div key={index}>
              <img src={minutes} alt="" className="w-full" />

              <h5 className="body-18 text-gray-50 mt-8">
                19 OCT 2022 | BY JOHN DOE |
              </h5>
              <p className="body-regular w-[60%] capitalize mt-4">
                Designers are meant to be loved, not to be understood.
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto flex-center mt-10">
          <Button
            text="See All minutes"
            textColor="text-primary-200 fontBold"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
