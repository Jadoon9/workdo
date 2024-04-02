import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/hero_new.svg";
import Button from "../components/common/Button";
import workplace from "../assets/landingpage/workplace.svg";
import ratings from "../assets/landingpage/Rating.svg";
import about from "../assets/landingpage/about.svg";
import checkIcon from "../assets/landingpage/check.svg";
import star from "../assets/landingpage/star.svg";
import location from "../assets/landingpage/location.svg";
import users from "../assets/landingpage/users.svg";
import s from "../assets/landingpage/s.svg";
import celeberate from "../assets/landingpage/celeberate.svg";
import heartUser from "../assets/landingpage/userHeart.svg";
import users2 from "../assets/landingpage/users2.svg";
import starIcon from "../assets/landingpage/stars.svg";
import nextSlide from "../assets/next.svg";
import foodImage from "../assets/landingpage/food.svg";
import InstaIcon from "../assets/landingpage/insta.svg";
import linkedIn from "../assets/landingpage/linkedin.svg";
import facebook from "../assets/landingpage/fb.svg";
import faq from "../assets/landingpage/faq.svg";
import minutes from "../assets/landingpage/minutes.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addNewsletter,
  getEntertainments,
  getFaq,
} from "../services/actions/landing";
import Loader from "../components/common/Loader";
import InputCommon from "../components/common/InputCommon";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { GrNext, GrPrevious } from "react-icons/gr";

const HomePage = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      const slidesPerView = screenWidth < 768 ? 1 : 3;

      if (swiperRef.current) {
        swiperRef.current.swiper.params.slidesPerView = slidesPerView;
        swiperRef.current.swiper.update(); // Update swiper instance
      }
    };

    updateSlidesPerView(); // Call initially to set correct slidesPerView

    // Add event listener for window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const [newsLetter, setNewsLetter] = useState("");
  const {
    isPending: pendindEntertainment,
    isError: isErrorEntertainment,
    data: dataEntertainment,
    error: errorEntertainment,
  } = useQuery({
    queryKey: ["entertainments"],
    queryFn: getEntertainments,
  });

  const {
    isPending: pendindFaq,
    isError: isErrorFaq,
    data: dataFaq,
    error: errorFaq,
  } = useQuery({
    queryKey: ["faq"],
    queryFn: getFaq,
  });

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

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleListBusiness = () => {
    // Navigate to the mailto URL
    window.location.href = "mailto:emma@workdo.co.uk";
  };

  console.log(dataEntertainment, "dataEntertainment");
  return (
    <div className="pb-8">
      <section className="paddingXS !lg:paddingX grid grid-cols-1 lg:grid-cols-2 my-4 lg:my-10 items-center">
        <div className="gap-y-2 my-8  lg:my-28 text-center lg:text-left">
          <h1 className="h2-55 md:h2 lg:h1-bold font-[800] text-primary-200">
            Work events <br /> done right.
          </h1>
          <div className="flex flex-col w-[80%] lg:w-full mx-auto lg:flex-row gap-3 my-6 ">
            <Button
              text="SUBMIT EVENT DETAILS"
              bgColor="bg-primary-200"
              textColor="text-white"
              paddingX="6"
              paddingY="2"
              onClick={() => navigate("/submit-event")}
              smallText
            />
            <a
              className="px-8 py-2 border-2 text-center text-primary-200 border-primary-200 uppercase hover:opacity-85 relative font-bold body-medium lg:body-18 hover:scale-105 rounded-[45px]"
              href="mailto:emma@workdo.co.uk"
            >
              LIST YOUR BUSINESS
            </a>
            {/* <Button
              text="LIST YOUR BUSINESS"
              textColor="primary-200"
              paddingX="6"
              paddingY="2"
              smallText
              onClick={handleListBusiness}
            /> */}
          </div>
        </div>
        <div className="flex-center order-first lg:order-none lg:flex-none transition-opacity duration-1000">
          <img
            src={hero}
            className="w-auto h-auto object-contain "
            alt="hero"
          />
        </div>
      </section>

      <div className="bg-primary-100 my-4 lg:my-0 py-10 flex-center">
        <h2 className="paddingXS lg:paddingX uppercase neue800 h6 !leading-snug lg:h4 text-center  text-[#F8F6EE]">
          TEAM BUILDING • ENTERTAINMENT • WORKPLACE WELLBEING
        </h2>
      </div>

      <section className="paddingXS lg:paddingX  grid grid-cols-1 md:grid-cols-2 gap-4 my-10 lg:my-14">
        {pendindEntertainment ? (
          <Loader />
        ) : (
          <div className="relative order-last md:order-first">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000 }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {dataEntertainment?.length > 0 &&
              dataEntertainment !== undefined ? (
                dataEntertainment?.map?.((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="mb-10 ">
                      <img
                        src={ratings}
                        alt="ratings"
                        className="w-auto my-6"
                      />
                      <div>
                        <p className="body-regular lg:body-regular1 ">
                          {item.feedback}
                        </p>
                        <h5 className="mt-6 text-primary neue700  body-regular lg:body-regular1  ">
                          {item.username}
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <h3 className="body-regular futura800 lg:body-regular1 ">
                  No feedbacks found.
                </h3>
              )}
            </Swiper>
          </div>
        )}
        <div className="flex-center md:flex-end">
          <img src={workplace} alt="workplace" className="w-auto" />
        </div>
      </section>

      {/* <div className="paddingX w-full lg:w-1/2 my-2">
        <h2 className="h2 text-primary-200">
          Ideas to <br /> get started
        </h2>
        <p className="body-regular">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>
      </div> */}
      {/* <section className="paddingX grid grid-cols-1 lg:grid-cols-3 gap-8 my-14">
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
      </section> */}

      <div className="paddingXS lg:paddingX   w-full lg:w-1/2 mt-14 lg:mt-24  lg:my-12">
        <h2 className="h3 md:h2 text-primary-200 neue800 ">
          At workdo <br /> we believe
        </h2>
      </div>
      <section className="paddingXS lg:paddingX  text-center lg:text-start grid grid-cols-1 lg:grid-cols-3 gap-8 my-10 lg:my-14">
        {["Team Experience", "Entertainment", "Workplace Wellbeing"].map(
          (item, index) => (
            <div key={index}>
              <div className="">
                <img
                  src={
                    index == 0 ? users2 : index === 1 ? celeberate : heartUser
                  }
                  alt=""
                  className="w-12 h-12 mx-auto lg:mx-0"
                />
                <h2 className="h8 lg:h5 text-wrap font-medium  uppercase my-6 neue700  text-primary-50">
                  {item}
                </h2>
              </div>
              <p className="body-regular lg:body-regular1 ">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
            </div>
          )
        )}
      </section>

      <section className="paddingXS lg:paddingX mt-14 lg:mt-0   w-full my-10">
        <h2 className="h3 md:h2 text-primary-200 neue800">
          Why collab
          <br /> with us
        </h2>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-10">
        <div className="col-span-1 lg:col-span-7 bg-primary-100 paddingXS lg:paddingX py-12 lg:h-[600px]">
          {[...Array(3)].map((item, index) => (
            <div
              className="flex my-8 lg:my-0 gap-8 lg:space-y-10 lg:items-center"
              key={index}
            >
              <img
                src={starIcon}
                alt="star"
                className="w-12 h-12 lg:w-auto lg:h-auto"
              />
              <p className="body-regular lg:body-regular1 text-secondary-200">
                Lorem ipsum dolor sit amet consectetur. Etiam et cras sit
                quisque tortor. Eget in vel mattis quis ultricies libero
                pharetra. Porta tristique nunc viverra vitae cursus massa. Eget
                at amet tristique ultrices auctor.
              </p>
            </div>
          ))}
          <div className="ml-0 lg:ml-16 mt-16">
            <a
              className="px-6 py-2 border-2 text-white border-white text-center !w-full uppercase hover:opacity-85 block font-bold body-medium lg:body-18 hover:scale-105 rounded-[45px]"
              href="mailto:emma@workdo.co.uk"
            >
              List your business
            </a>
            {/* <Button
              text="List your business"
              width="w-full"
              textColor="text-white"
              borderWhite
            /> */}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-5 lg:pr-10 lg:h-[600px]">
          <img
            src={foodImage}
            alt="foodImage"
            className="w-full lg:w-auto h-full object-cover lg:object-cover"
          />
        </div>
      </section>

      <section className="flex paddingXS lg:paddingX flex-col lg:flex-row justify-between items-center  w-full my-16">
        <div className="my-10 w-full lg:w-1/3  text-left  text-primary-200">
          <h2 className="h3 md:h2 text-primary-200  ">
            Sign up to our
            <br /> <span className="neue800">newsletter</span> <br />
            for inspiration
          </h2>
        </div>

        <div className="w-full lg:w-1/2  ">
          <div className="flex w-full flex-col gap-8 ">
            <InputCommon
              type="text"
              placeholder="Enter Your Email"
              handleInputChange={(e) => {
                setNewsLetter(e.target.value);
              }}
              value={newsLetter}
              pending={pendingNewsLetter}
              buttonOnClick={() => mutateNewsLetter({ email: newsLetter })}
              renderButton
            />
            <p className="body-medium lg:body-18 mx-auto capitalize text-primary-200 font-light">
              Your email is safe with us, we dont spam.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-100">
        <div className="paddingXS lg:paddingX  flex flex-col gap-6 py-10 md:flex-row  ">
          <h2 className="h3 md:h2 text-secondary-200 neue800 text-start w-full md:w-1/2">
            Follow us on <br />
            social media
          </h2>
          <div className="flex items-center gap-x-7 justify-start flex-1 w-full ">
            <img
              src={InstaIcon}
              alt="InstaIcon"
              className=" w-12 md:w-16 md:mr-4  md:mb-0"
            />
            <img
              src={facebook}
              alt="facebook"
              className=" w-10 md:w-12 md:mr-4  md:mb-0"
            />
            <img
              src={linkedIn}
              alt="linkedIn"
              className=" w-12 md:w-16 md:mr-4  md:mb-0"
            />
          </div>
        </div>
      </section>

      <section className="paddingXS lg:paddingX  lg:p-8 my-10">
        <h2 className="text-primary-200 h3 md:h2  neue800 pt-10 pb-2">
          Frequently asked <br />
          questions
        </h2>
        <p className="w-full body-regular md:body-regular1 lg:w-1/2 text-start">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>
        <div className="my-12 relative">
          {pendindFaq ? (
            <Loader />
          ) : (
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={10}
              navigation={true}
              pagination={{ clickable: true }}
              // autoplay={{ delay: 3000 }}
              modules={[Navigation, Autoplay]}
              className="mySwiper relative"
            >
              {dataFaq?.length > 0
                ? dataFaq?.map?.((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white h-[300px] overflow-scroll rounded-[18px] border-4 border-primary-200 px-8 py-2">
                        <img src={faq} alt="" className="my-4" />
                        <h5 className="body-regular lg:body-regular1 font-extrabold text-primary-50">
                          {item?.question}
                        </h5>
                        <p className="text-gray-50 body-medium lg:body-regular my-2 text-[18px]">
                          {item?.answer}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))
                : null}
              {/* Default next and previous buttons */}
              <div className="flex-between gap-x-3 absolute z-50 top-1/2 left-0 w-full">
                <div
                  className="swiper-button-prev rounded-full cursor-pointer shadow"
                  onClick={goPrev}
                >
                  <GrPrevious className="w-12 h-12 p-4 rounded-full bg-white" />
                </div>
                <div
                  className="swiper-button-next rounded-full shadow cursor-pointer "
                  onClick={goNext}
                >
                  <GrNext className="w-12 h-12 p-4 rounded-full bg-white" />
                </div>
              </div>
            </Swiper>
          )}
        </div>
      </section>
      {/* 
      <section className="my-10 paddingX w-full">
        <h2 className=" text-primary-200 h2 uppercase  pt-10 pb-2">Minutes</h2>
        <p className="body-regular text-primary-50 w-[60%]">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>
      </section>

      <section className="paddingX lg:p-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 w-full lg:items-start">
          {[...Array(3)].map((item, index) => (
            <div key={index} className="w-full lg:w-1/3">
              <img src={minutes} alt="" className="w-full" />
              <h5 className="body-18 text-gray-50 mt-8">
                19 OCT 2022 | BY JOHN DOE |
              </h5>
              <p className="body-regular lg:w-[60%] capitalize mt-4">
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
      </section> */}
    </div>
  );
};

export default HomePage;
