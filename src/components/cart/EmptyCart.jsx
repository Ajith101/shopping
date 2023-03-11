import React from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="bg-blue-100 border-[5px] border-black flex flex-col justify-center gap-9 items-center w-[70%] rounded-2xl h-[50vh]">
      <h1 className="font-signature-1 text-4xl font-bold">Sorry No Itemes</h1>
      <h3 className="font-font-2 text-xl">
        There are no items in your cart. Would you like to explore some
        products?
      </h3>
      <BsCart4 className="font-light text-blue-600" size={"110px"} />
      <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
        <button className="bg-green-500 px-14 py-2 text-center text-2xl text-white border-[4px] border-white">
          Explore Now
        </button>
      </NavLink>
    </div>
  );
};

export default EmptyCart;
