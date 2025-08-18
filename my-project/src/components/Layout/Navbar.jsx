import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const NavItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Education", path: "education" },
    { name: "Work", path: "work" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <>
      <div className="fixed w-full z-50 bg-red-300 p-5 ">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <div className="logo text-xl font-bold">Portfolio</div>

          {/* Navlinks */}
          <div className="Navlinks flex gap-5 ">
            {NavItems.map((link) => (
              <Link
                key={link.name}
                to={link.path} // matches <Element name="..."> in App.js
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} // adjust for navbar height
                className="cursor-pointer font-bold hover:text-blue-600"
                activeClass="text-blue-600 border-b-2 border-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
