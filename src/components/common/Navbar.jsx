import logo from "../../assets/landingpage/logo.svg";
import Button from "./Button";

const navitems = [
  { id: 1, name: "Home", link: "/" },
  {
    id: 2,
    name: "Experiences",
    link: "/eperiences",
  },
  {
    id: 3,
    name: "How it works",
    link: "/hiw",
  },
  {
    id: 4,
    name: "Minutes Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex-between paddingX my-8">
        <img src={logo} alt="Logo" className="" />
        <div className="flex-between gap-x-20">
          {navitems.map((item) => (
            <p
              className="body-regular font-light cursor-pointer hover:opacity-95 hover:scale-105"
              key={item.id}
            >
              {item.name}
            </p>
          ))}
          <Button
            text="LOG IN"
            bgColor="bg-primary-200"
            textColor="text-white"
            paddingX="6"
            paddingY="2"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
