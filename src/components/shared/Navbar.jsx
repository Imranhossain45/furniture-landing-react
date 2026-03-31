import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
{path:"/",label:"Furniture"},
{path:"/shop",label:"Shop"},
{path:"/about",label:"About Us"},
{path:"/contact",label:"Contact"},
];
const NavItems = (toggleMenu) =>{
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {
        navItems.map((item,index)=>(
          <li key={index} onClick={toggleMenu}>
            <NavLink to={item.path} className={({isActive}) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
            }>{item.label}</NavLink>
          </li>
        ))
      }
    </ul>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(prevState => !prevState)
  }
  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out text-white`}>
        <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4 ">
          {/* logo */}
          <Link to="/">Logo</Link>
          {/* hamburger menu for mobile */}
          <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
            {
              isMenuOpen ? null : <FaBars />
            }
          </div>
          {/* desktop menu items */}
          <div className="hidden md:flex">
           <NavItems></NavItems>
          </div>
          {/* mobile menu items */}
          <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={toggleMenu}>
              <FaTimes />
            </div>
            <NavItems toggleMenu={toggleMenu}></NavItems>
          </div>
          {/* cart icon */}
          <div className="hidden md:block cursor-pointer relative">
          <HiOutlineShoppingBag className="text-xl"/>
          <sup className="absolute -top-2 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">0</sup>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
