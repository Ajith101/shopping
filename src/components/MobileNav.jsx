import React from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ setMobMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed flex flex-col items-center justify-center md:hidden top-0 left-0 w-2/3 bg-blue-400 h-screen">
      <GrClose
        onClick={() => setMobMenu(false)}
        className="absolute text-white top-5 right-5"
        size={"26px"}
      />{" "}
      <ul className="flex flex-col gap-4 text-xl">
        <li onClick={() => navigate(`/`)}>Home</li>
        <li onClick={() => navigate(`/categorylist`)}>Category</li>
        <li onClick={() => navigate(`/productlist`)}>Products</li>
        <li onClick={() => navigate(`/brands`)}>Brands</li>
      </ul>
    </div>
  );
};

export default MobileNav;
