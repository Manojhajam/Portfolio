import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // for hamburger/close icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !scrolled) {
        setScrolled(true);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 900);
      } else if (window.scrollY <= 20 && scrolled) {
        setScrolled(false);
      }
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
        scrolled
          ? "bg-gray-400/70 shadow-lg backdrop-blur-md"
          : "bg-gray-600/40"
      } ${animate ? "animate-navbar-slide" : ""}`}
    >
      <div className="w-[90%] m-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-xl font-bold">Portfolio</div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-5">
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

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`sm:hidden absolute top-[68px] right-0 w-full bg-white/95 backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-6 transition-all duration-300 ease-out ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {NavItems.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer font-bold hover:text-blue-400"
              activeClass="text-blue-400 border-b-2 border-blue-400"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
