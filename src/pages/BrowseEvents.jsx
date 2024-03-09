import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import dasIcon from "../assets/categories/dashboard.svg";
import downArrow from "../assets/categories/downArrow.svg";
import location from "../assets/categories/location.svg";
import vertLogo from "../assets/categories/verticalLogo.svg";
import about from "../assets/landingpage/about.svg";
import checkIcon from "../assets/landingpage/check.svg";
import ratings from "../assets/landingpage/Rating.svg";

const BrowseEvents = () => {
  const navigate = useNavigate();
  return (
    <div className="paddingX">
      <div className="flex flex-col md:flex-row justify-between items-stretch h-full">
        <div className="w-full md:1/2">
          <h2 className="h1-bold">
            Browse <br /> categories
          </h2>
          <p className="body-regular md:w-[60%] my-5 capitalize">
            Lorem ipsum dolor sit amet consectetur. Tellus sit morbi tincidunt
            purus mi. Id pharetra adipiscing laoreet viverra. Viverra egestas
            viverra convallis at dui amet iaculis quisque amet. Ut molestie est
            amet duis nibh nunc tortor. Elementum scelerisque quisque fames
            amet. Quis pellentesque ut faucibus aliquam eget urna arcu.
          </p>

          <div className="flex flex-col md:flex-row gap-3 my-6 ">
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
          <div className="flex  mt-24 mb-4 w-full md:w-1/2">
            <div className="px-5 w-[50%] py-3 border-primary-50 border rounded-tl-[45px] rounded-bl-[45px] flex-between">
              <img src={dasIcon} alt="" />
              <p className="">Category</p>
              <img src={downArrow} alt="" />
            </div>
            <div className="px-5 py-3  w-[50%] flex-between border-primary-50 border rounded-tr-[45px] rounded-br-[45px] ">
              <img src={location} alt="" />
              <p>Location</p>
              <img src={downArrow} alt="" />
            </div>
          </div>
          <p className="body-regular mt-8 mb-20">
            There are <strong className="futura800">24 Experiences</strong> of
            your selected category
          </p>
        </div>
        <div className="md:w-1/2 hidden lg:block">
          <img
            src={vertLogo}
            alt=""
            className="h-full p-0 w-auto object-cover float-right"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </div>
      <section className="grid grid-cols-12 gap-8 my-14">
        {[...Array(6)].map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-4">
            <img
              src={about}
              alt=""
              className="rounded-[16px] w-auto  object-cover"
            />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between  mt-6">
              <div className="flex items-center gap-x-4 ">
                <h2 className="h6 uppercase text-primary-200 neue700">Name</h2>
                <img src={checkIcon} alt="check" />
              </div>
              <div className="flex items-center gap-x-2">
                <img src={ratings} alt="ratings" className="w-16 h-16" />
                <p className="small-regular text-gray-50">4.5 (210)</p>
              </div>
            </div>
            <p className="body-regular">
              Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
              tortor. Eget in vel mattis quis ultricies libero pharetra.
            </p>

            <div className="my-6">
              <Button text="Explore experience" width="[80%]" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BrowseEvents;
