import Button from "../components/common/Button";
import checkIcon from "../assets/landingpage/check.svg";
import shopBanner from "../assets/shop/shop-banner.svg";
import shop1 from "../assets/shop/shop-1.svg";
import shop2 from "../assets/shop/shop-2.svg";
import shop3 from "../assets/shop/shope-3.svg";
import location from "../assets/shop/location.svg";
import time from "../assets/shop/time.svg";
import user from "../assets/shop/user.svg";
import web from "../assets/shop/web.svg";
import check from "../assets/shop/check.svg";
import map from "../assets/shop/map.svg";

import ratings from "../assets/landingpage/Rating.svg";
import workplace from "../assets/landingpage/workplace.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ShopNow = () => {
  return (
    <div className=" my-16">
      <div className=" w-full">
        <div className="p-[20px] lg:paddingX flex-between  w-1/2">
          <h2 className="text-6xl lg:h1-bold ">Shop name</h2>
          <img src={checkIcon} alt="" className="w-12" />
        </div>
        <p className="p-[20px] lg:paddingX body-regular lg:w-1/2 my-5 capitalize text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Tellus sit morbi tincidunt
          purus mi. Id pharetra adipiscing laoreet viverra. Viverra egestas
          viverra convallis at dui amet iaculis quisque amet. Ut molestie est
          amet duis nibh nunc tortor. Elementum scelerisque quisque fames amet.
          Quis pellentesque ut faucibus aliquam eget urna arcu.
        </p>

        <div className="p-[20px] lg:paddingX flex w-1/2 flex-col justify-between lg:flex-row gap-4 lg:gap-12">
          <Button
            text="Book Now"
            bgColor="bg-primary-200"
            textColor="text-white"
            paddingX="4"
            paddingY="2"
            width="w-full"
          />
        </div>
        <div className="p-[20px] lg:paddingX w-full my-8">
          <img src={shopBanner} alt="" className="w-full bg-contain" />
        </div>

        <div className="p-[20px] lg:paddingX flex-between">
          <div className="flex gap-3">
            <img src={shop1} alt="" />
            <img src={shop2} alt="" />
            <img src={shop3} alt="" />
          </div>
          <div className="flex-between w-1/3">
            <div className="flex flex-col items-center">
              <h2 className="h2">45 $</h2>
              <p className="body-regular">Per person</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="h2">100 $</h2>
              <p className="body-regular">For 3 person</p>
            </div>
          </div>
        </div>

        <div className="p-[20px] lg:paddingX flex justify-between my-20 items-center w-[60%]">
          <div className="flex items-center gap-3">
            <img src={location} alt="" />
            <p className="body-medium">Theme Park, London</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={time} alt="" />
            <p className="body-medium">1 Month</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={user} alt="" />
            <p className="body-medium">min 4 & max 10</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={web} alt="" />
            <p className="body-medium">Title.com</p>
          </div>
        </div>

        <div className="p-[20px] lg:paddingX">
          <h2 className="h7">Description</h2>
          <p className="body-regular">
            Lorem ipsum dolor sit amet consectetur. Vivamus suspendisse
            porttitor etiam a rhoncus praesent mattis. Nunc eget facilisis
            tortor pellentesque. Tincidunt nisl morbi malesuada netus urna
            dolor. Odio amet ut purus phasellus tempus elit a hendrerit.
          </p>
        </div>

        <div className="p-[20px] lg:paddingX mt-14 mb-6">
          <h2 className="h2">
            Price <br /> breakdown
          </h2>
        </div>

        <div className="p-[20px] lg:paddingX flex gap-10">
          <div className="p-4 border-2 border-black h-[200px] rounded-lg w-96">
            <div className="flex justify-between items-start">
              <div className="flex flex-col justify-between gap-5 h-full">
                <div className="p-2 border border-1 border-black w-12 rounded-md  ">
                  Pro
                </div>
                <h2 className="h2">$0</h2>
                <p className="body-regular">3 Person</p>
              </div>
              <div className="flex gap-4">
                <img src={check} alt="" />
                <p className="body-regular">Pickup and drop</p>
              </div>
            </div>
          </div>
          <div className="p-4 border border-2 border-black h-[200px] rounded-lg w-96">
            <div className="flex justify-between items-start">
              <div className="flex flex-col justify-between gap-5 h-full">
                <div className="p-2 border border-1 border-black w-12 rounded-md  ">
                  Pro
                </div>
                <h2 className="h2">$0</h2>
                <p className="body-regular">3 Person</p>
              </div>
              <div className="flex gap-4">
                <img src={check} alt="" />
                <p className="body-regular">Pickup and drop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[20px] lg:paddingX mt-7 mb-8">
          <h2 className="text-6xl lg:h2">Map</h2>
          <p className="body-regular w-full my-5 capitalize text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Vivamus suspendisse
            porttitor etiam a rhoncus praesent mattis. Nunc eget facilisis
            tortor pellentesque. Tincidunt nisl morbi malesuada netus urna
            dolor. Odio amet ut purus phasellus tempus elit a hendrerit.
          </p>
        </div>

        <div className="w-full my-4">
          <img src={map} alt="" className="w-full bg-contain" />
        </div>

        <h2 className="text-6xl paddingX my-14  lg:h2 ">Reviews</h2>
        <div className="paddingX grid grid-cols-1 lg:grid-cols-2 gap-4 my-14">
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
                      Eget at amet tristique ultrices auctor.Lorem ipsum dolor
                      sit amet consectetur. Etiam et cras sit quisque tortor.
                      Eget in vel mattis quis ultricies libero pharetra. Porta
                      tristique nunc viverra vitae cursus massa. Eget at amet
                      tristique ultrices auctor.
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
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
