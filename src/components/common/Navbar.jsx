import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/landingpage/logo.svg";
import Button from "./Button";

const navitems = [
  { id: 1, name: "Home", link: "/" },
  {
    id: 2,
    name: "Experiences",
    link: "/shop-now",
  },
  {
    id: 3,
    name: "How it works",
    link: "/minutes-details",
  },
  {
    id: 4,
    name: "Minutes Blog",
    link: "/faq",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-2 mb-10  md:py-4 md:px-8">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-24 md:w-auto object-cover" />
      </Link>
      <div className="flex items-center gap-x-8">
        <div className="hidden md:flex gap-x-8">
          {navitems.map((item) => (
            <Link to={item.link} key={item.id}>
              <p className="body-regular font-light cursor-pointer hover:opacity-95 hover:scale-105">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <Button
          text="LOG IN"
          bgColor="bg-primary-200"
          textColor="text-white"
          paddingX="6"
          paddingY="2"
          onClick={() => navigate("/login")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
