import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const fullName = "Manoj Hajam";

const roles = ["Full Stack Developer", "Web Developer", "Software Developer"];

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
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 px-6">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full max-w-5xl">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
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
        <Motion.div
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
        </Motion.div>
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
