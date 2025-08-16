import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className=" bg-red-300 p-5">
        <div className="w-[90%] m-auto flex justify-between  items-center">
          <div className="logo text-xl font-bold">Portfolio</div>
          <div className="Navllinks flex gap-5 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <div>About Us</div>
            <div>Skills</div>
            <div>Education</div>
            <div>Work</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
