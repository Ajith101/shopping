import React from "react";
import { GoSearch } from "react-icons/go";
import { BsFillCartCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItemes } = useSelector((state) => state.cart);
  return (
    <div className="bg-blue-500 px-10 flex justify-between items-center fixed z-50 text-white w-full py-7">
      <div className="flex gap-4 justify-center items-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
          <h1 className="text-3xl">Shopping App</h1>
        </NavLink>

        <ul className="hidden md:flex md:justify-center md:gap-5 md:items-center md:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productlist"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>Brands</li>
          <li>Promotions</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="relative">
          <input
            onChange={() => console.log()}
            className="md:p-2 hidden md:text-black"
            value={"search"}
            type="text"
          />
          <GoSearch
            className="hidden md:absolute md:right-2 md:top-2 md:text-black"
            size={"25px"}
          />
        </div>

        <NavLink to="/cart" className={({ isActive }) => (isActive ? "" : "")}>
          <BsFillCartCheckFill className="relative" size={"25px"} />{" "}
        </NavLink>
        {cartItemes.length !== 0 ? (
          <div className="bg-yellow-500 fixed top-2 px-3 py-1 z-40 text-center right-5 rounded-full">
            {cartItemes.length}
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Header;
