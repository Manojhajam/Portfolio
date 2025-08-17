import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const NavItems = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Skills', path: '/skills'},
    {name: 'Education', path: '/education'},
    {name: 'Work', path: '/work'},
    {name: 'Contact', path: '/contact'},
  ]

  return (
    <>
      <div className="fixed w-full z-50 bg-red-300 p-5 ">
        <div className="w-[90%] m-auto flex justify-between  items-center">
          <div className="logo text-xl font-bold">Portfolio</div>

          {/* Navlinks */}


          <div className="Navlinks flex gap-5 ">
            {NavItems.map((link) => (
              <Link
              key={link.name}  to={link?.path}>
                <div className='font-bold'>{link?.name}</div>
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
