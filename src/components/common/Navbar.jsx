import { Link } from "react-router-dom";
import logo from "../../assets/logo_new.svg";
import Button from "./Button";
import { useEffect } from "react";

const navitems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Experiences", link: "#" },
  { id: 3, name: "How it works", link: "#" },
  { id: 4, name: "Blog", link: "#" },
];

const Navbar = () => {
  useEffect(() => {
    // Initialize tooltips when component mounts
    const tooltips = document.querySelectorAll(".nav-tooltip");
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", () => {
        tooltip.querySelector(".tooltip-text").style.opacity = "1";
      });
      tooltip.addEventListener("mouseout", () => {
        tooltip.querySelector(".tooltip-text").style.opacity = "0";
      });
    });
  }, []);

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-2 mb-10 md:py-4 md:px-8">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-auto object-cover" />
      </Link>
      <div className="flex items-center gap-x-8 relative">
        <div className="hidden md:flex gap-x-8">
          {navitems.map((item) => (
            <Link to={item.link} key={item.id} className="relative nav-tooltip">
              <p className="body-regular font-light cursor-pointer hover:opacity-95 hover:scale-105">
                {item.name}
              </p>
              {item.name !== "Home" && (
                <span className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-max py-1 px-2 bg-primary-200 text-white text-xs rounded-md whitespace-nowrap opacity-0 tooltip-text transition-opacity duration-300">
                  Coming Soon
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="nav-tooltip">
          <Button
            text="LOG IN"
            bgColor="bg-primary-200"
            textColor="text-white"
            paddingX="6"
            paddingY="2"
            tootip=".nav-tooltip"
          />
          <span className="absolute left-[50%] md:left-[90%] bottom-[-30px] transform -translate-x-1/2 w-max py-1 px-2 bg-primary-200 text-white text-xs rounded-md whitespace-nowrap opacity-0 tooltip-text transition-opacity duration-300">
            Coming Soon
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
