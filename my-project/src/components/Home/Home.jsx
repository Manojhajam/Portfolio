import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const fullName = "Manoj Hajam";

const roles = ["Full Stack Developer", "Web Developer", "Software Developer"];
const techIcons = [
  {
    symbol: "⚛",
    color: "text-cyan-400",
    border: "border-cyan-400/40",
    glow: "rgba(34,211,238,0.35)",
    offset: 0,
  },
  {
    symbol: "TS",
    color: "text-blue-400",
    border: "border-blue-400/40",
    glow: "rgba(59,130,246,0.35)",
    offset: 90,
  },
  {
    symbol: "JS",
    color: "text-green-400",
    border: "border-green-400/40",
    glow: "rgba(74,222,128,0.35)",
    offset: 180,
  },
  {
    symbol: "🐘",
    color: "text-indigo-400",
    border: "border-indigo-400/40",
    glow: "rgba(129,140,248,0.35)",
    offset: 270,
  },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charCount === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charCount === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => setCharCount((c) => c + (deleting ? -1 : 1)),
        deleting ? 40 : 90,
      );
    }

    return () => clearTimeout(timeout);
  }, [charCount, deleting, roleIndex]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 px-6 bg-[#F8FAFC]">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full max-w-6xl">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left md:pr-50">
          <h1 className="text-6xl font-bold">
            Hi, I'm <br />
            <span className="text-blue-500">
              {fullName.split("").map((char, i) => (
                <Motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                >
                  {char === " " ? "\u00A0" : char}
                </Motion.span>
              ))}
            </span>
          </h1>
          <Motion.h2
            className="text-2xl md:text-3xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            I am a{" "}
            <span className="text-blue-500">
              {roles[roleIndex].substring(0, charCount)}
              <span className="animate-pulse">|</span>
            </span>
          </Motion.h2>
          <Motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
          >
            I create stunning web app and mobile app experiences with clean code
            and modern design. Let's build something amazing together.
          </Motion.p>
          <Motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <button className="bg-blue-600 text-white px-7 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg">
              <Link
                to={"contact"}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact Me
              </Link>
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-colors shadow-lg text-lg">
              Learn More
            </button>
          </Motion.div>
        </div>
        {/* <Motion.div
          className="w-[250px] h-[250px] shrink-0 rounded-full border-4 border-blue-600 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-full h-full object-cover"
            src="/assets/pp.jpg"
            alt="Manoj"
          />
        </Motion.div> */}
        <div className="flex-1 flex justify-center items-center">
          <Motion.div
            className="relative w-[280px] h-[280px] shrink-0"
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110" />

            {/* Rotating orbit ring (visual guide) */}
            <Motion.div
              className="absolute inset-[-18px] rounded-full border border-blue-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1 left-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />
            </Motion.div>

            {/* Second orbit */}
            <Motion.div
              className="absolute inset-[-8px] rounded-full border border-purple-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 shadow-[0_0_50px_rgba(59,130,246,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-950">
                <Motion.img
                  src="/assets/pp.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Icons orbiting on their own path */}

            {/* {techIcons.map((icon, i) => ( */}
            {/* <Motion.div
              key={i}
              className="absolute inset-[-42px]"
              style={{ rotate: icon.offset }}
              animate={{ rotate: [icon.offset, icon.offset + 360] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
       
              <Motion.div
                className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl
                    bg-slate-900/80 backdrop-blur-md
                    border ${icon.border}
                    flex items-center justify-center`}
                style={{ boxShadow: `0_0_25px_${icon.glow}` }}
                animate={{ rotate: [-icon.offset, -icon.offset - 360] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <span className={`text-xl font-bold ${icon.color}`}>
                  {icon.symbol}
                </span>
              </Motion.div>
            </Motion.div> */}
            {/* ))} */}
          </Motion.div>
        </div>
      </div>
      <Link
        to={"about"}
        smooth={true}
        duration={1000}
        className="animate-bounce mt-10 cursor-pointer"
      >
        <ArrowDown color="#2563eb" size={30} />
      </Link>
    </div>
  );
};

export default Home;
