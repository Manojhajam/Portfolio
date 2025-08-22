import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > 20 && !scrolled) {
        setScrolled(true);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 900); // Animation lasts 0.9s
      } else if (window.scrollY <= 20 && scrolled) {
        setScrolled(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const NavItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Education", path: "education" },
    { name: "Work", path: "work" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div
      className={`fixed w-full z-50 p-5 transition-all duration-300 ${
        scrolled ? "bg-gray-400/70 shadow-lg backdrop-blur-md" : "bg-gray-600/40"
      } ${animate ? "animate-navbar-slide" : ""}`}
    >
      <div className="w-[90%] m-auto flex justify-between items-center">
        <div className="logo text-xl font-bold">Portfolio</div>
        <div className="Navlinks flex gap-5 ">
          {NavItems.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer font-bold hover:text-blue-600"
              activeClass="text-blue-600 border-b-2 border-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
