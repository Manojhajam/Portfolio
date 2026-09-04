import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // for hamburger/close icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

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

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

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
      ref={navbarRef}
      className={`fixed w-full z-50 p-5 transition-all duration-300 ${
        scrolled
          ? "bg-gray-400/70 shadow-lg backdrop-blur-md"
          : "bg-gray-600/40"
      } ${animate ? "animate-navbar-slide" : ""}`}
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center relative z-10">
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

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-md overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
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
      </div>
    </div>
  );
};

export default Navbar;
