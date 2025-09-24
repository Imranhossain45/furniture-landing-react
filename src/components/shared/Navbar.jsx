import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

const navItems = [
{path:"/",label:"Furniture"},
{path:"/shop",label:"Shop"},
{path:"/about",label:"About Us"},
{path:"/contact",label:"Contact"},
];
const NavItems = () =>{
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {
        navItems.map((item,index)=>(
          <li key={index}>
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
  return (
    <div>
      <header>
        <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4 ">
          {/* logo */}
          <Link to="/">Logo</Link>
          {/* hamburger menu for mobile */}
          <div className="md:hidden text-xl cursor-pointer hover:text-primary">
            <FaBars />
          </div>
          {/* desktop menu items */}
          <div className="hidden md:flex">
           <NavItems></NavItems>
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
