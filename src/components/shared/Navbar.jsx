import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4 ">
          {/* logo */}
          <Link to="/">Logo</Link>
          {/* desktop menu items */}
          <div>
            <ul className="flex flex-col md:flex-row md:space-x-8 gap-8">
              <li>
                <NavLink to={"/"}>Furniture</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          {/* cart icon */}
          <div>carts</div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
