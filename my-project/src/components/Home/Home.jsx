import React from 'react'
import manoj from "../../assets/manoj.jpg"


const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-4xl">
      <div className="photo">
        <img
          className="w-[250px] h-[250px] rounded-full border-4 border-blue-600"
          src={manoj}
          alt="Manoj"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-bold mt-5">
          Hi, I'm <span className="text-blue-500">Manoj Hajam</span>
        </h1>
        <h2 className='font-semibold'>Software Developer</h2>
        <p className="text-xl">
          {" "}
          I create stunning web app and mobile app experiences with clean code
          and <br />
          modern design. Let's build something amazing together.
        </p>
      </div>
    </div>
  );
}

export default Home
