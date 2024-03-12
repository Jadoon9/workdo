import Button from "../components/common/Button";
import insta from "../assets/minutes/insta.svg";
import fb from "../assets/minutes/facebook.svg";
import linkedIn from "../assets/minutes/linkedin.svg";
import mail from "../assets/minutes/mail.svg";
import detailBanner from "../assets/minutes/detailHeader.svg";
import about from "../assets/landingpage/about.svg";

const MinuteDetails = () => {
  return (
    <div className="p-[20px] lg:paddingX my-16">
      <div className="w-full">
        <h2 className="text-6xl lg:h1-bold ">Minutes</h2>
        <p className="body-regular lg:w-[60%] my-5 capitalize text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>
        <p className="text-gray-50 body-regular text-sm lg:text-base">
          August 19, 2022
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
          <div className="my-4 w-full lg:w-1/2">
            <Button
              text="Share"
              bgColor="bg-primary-200"
              textColor="text-white"
              paddingX="4"
              paddingY="2"
              width="w-full"
            />
          </div>
          <div className="flex gap-x-4 lg:mt-0">
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={linkedIn} alt="" />
            <img src={mail} alt="" />
          </div>
        </div>
        <div className="w-full my-4">
          <img src={detailBanner} alt="" className="w-full bg-contain" />
        </div>
        <p className="h7 font-bold futura800 my-3 !leading-[1.5] text-sm lg:text-base">
          Collaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          IndonesiaCollaboration to Develop Coffee and Beverage community in
          Indonesia
        </p>
        <div className="mt-8 lg:mt-20">
          <h2 className="h3 my-4 lg:my-8 text-xl lg:text-2xl">Sub Heading</h2>
          <p className="body-regular !leading-[1.5] text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Diam consectetur aliquam
            ultricies malesuada lorem nisi faucibus. Nullam molestie sagittis
            libero sit ut. Ut venenatis auctor molestie lectus magna suspendisse
            dui eget cras. Mauris tellus suspendisse interdum cras turpis
            tristique tincidunt a. In risus dapibus pellentesque adipiscing
            mauris. Eleifend mi sem risus aenean. Lectus semper id donec risus
            semper. Enim in bibendum id dis quis nisi. Tellus felis nisl eu amet
            magna ultrices malesuada elementum ornare. Libero rhoncus libero
            netus volutpat est amet. Elementum fermentum magnis tempor sit nunc.
            Suspendisse vitae porta fames nibh turpis at porttitor. Interdum non
            vestibulum tempus cursus in. Lacus tristique dui nulla etiam
            habitasse pretium.
          </p>
        </div>
        <div className="mt-8 lg:mt-20">
          <h2 className="h3 my-4 lg:my-8 text-xl lg:text-2xl">Sub Heading</h2>
          <p className="body-regular !leading-[1.5] text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Diam consectetur aliquam
            ultricies malesuada lorem nisi faucibus. Nullam molestie sagittis
            libero sit ut. Ut venenatis auctor molestie lectus magna suspendisse
            dui eget cras. Mauris tellus suspendisse interdum cras turpis
            tristique tincidunt a. In risus dapibus pellentesque adipiscing
            mauris. Eleifend mi sem risus aenean. Lectus semper id donec risus
            semper. Enim in bibendum id dis quis nisi. Tellus felis nisl eu amet
            magna ultrices malesuada elementum ornare. Libero rhoncus libero
            netus volutpat est amet. Elementum fermentum magnis tempor sit nunc.
            Suspendisse vitae porta fames nibh turpis at porttitor. Interdum non
            vestibulum tempus cursus in. Lacus tristique dui nulla etiam
            habitasse pretium.
          </p>
        </div>
        <div className="mt-8 lg:mt-20">
          <h2 className="h3 my-4 lg:my-8 text-xl lg:text-2xl">Sub Heading</h2>
          <p className="body-regular !leading-[1.5] text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Diam consectetur aliquam
            ultricies malesuada lorem nisi faucibus. Nullam molestie sagittis
            libero sit ut. Ut venenatis auctor molestie lectus magna suspendisse
            dui eget cras. Mauris tellus suspendisse interdum cras turpis
            tristique tincidunt a. In risus dapibus pellentesque adipiscing
            mauris. Eleifend mi sem risus aenean. Lectus semper id donec risus
            semper. Enim in bibendum id dis quis nisi. Tellus felis nisl eu amet
            magna ultrices malesuada elementum ornare. Libero rhoncus libero
            netus volutpat est amet. Elementum fermentum magnis tempor sit nunc.
            Suspendisse vitae porta fames nibh turpis at porttitor. Interdum non
            vestibulum tempus cursus in. Lacus tristique dui nulla etiam
            habitasse pretium.
          </p>
        </div>

        <div className="flex justify-center items-center w-full mt-12 mb-12 lg:mt-24 lg:mb-12">
          <Button
            bgColor="bg-primary-200"
            text="Get in Touch"
            textColor="text-white"
            width="w-[40%]"
          />
        </div>
        <div>
          <h2 className="text-6xl lg:h1-bold ">
            More <br />
            Minutes
          </h2>
          <p className="body-regular lg:w-[70%] my-5 capitalize text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
            tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
            tristique nunc viverra vitae cursus massa. Eget at amet tristique
            ultrices auctor.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-12">
          {[...Array(3)].map((item, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <img
                src={about}
                alt=""
                className="rounded-[16px] w-full md:max-w-[400px] lg:max-w-[300px] object-cover"
              />
              <p className="text-gray-50 font-bold uppercase mt-6 body-medium text-xs md:text-sm lg:text-base">
                19 OCT 2022 | BY JOHN DOE |
              </p>
              <p className="body-18 my-5 md:my-2 w-full lg:w-[60%] capitalize text-sm md:text-base">
                Designers are meant to be loved, not to be understood.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinuteDetails;
