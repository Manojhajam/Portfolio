import React from 'react'
import manoj from "../../assets/manoj.jpg"
import manoj2 from "../../assets/manoj2.jpg"
import { ArrowDown } from "lucide-react"
import AboutUs from '../AboutUs/AboutUs'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-4xl gap-5">
      <div className="photo">
        <img
          className="w-[250px] h-[250px] rounded-full border-4 border-blue-600 mt-24"
          src={manoj2}
          alt="Manoj"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-bold mt-5 text-center">
          Hi, I'm{" "}
          <span className="text-blue-500 sm:items-center">Manoj Hajam</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground text-center">
          Software Developer
        </h2>
        <p className="text-xl text-center">
          {" "}
          I create stunning web app and mobile app experiences with clean code
          and <br />
          modern design. Let's build something amazing together.
        </p>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-7 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg">
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            className="animate-bounce mt-10 cursor-pointer"
          >
            Contact Me
          </Link>
        </button>
        <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-colors shadow-lg text-lg">
          Learn More
        </button>
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
}

export default Home
