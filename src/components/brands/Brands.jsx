import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import Header from "../Header";

const Brands = () => {
  const navigate = useNavigate();
  const { datass } = useContext(AllProductsList);
  const nameOfbrands = datass.map((item) => {
    return item.brand;
  });
  //   console.log(nameOfbrands);
  let filterBrands = nameOfbrands.filter((item, id) => {
    return nameOfbrands.indexOf(item) === id;
  });
  //   console.log(filterBrands);

  // pagination on brands
  let itemesPerPage = 20;
  let [currentPage, SetCurentPage] = useState(1);
  let lastIndexOfPage = itemesPerPage * currentPage;
  let firstIndexOfPage = lastIndexOfPage - itemesPerPage;
  let slicedItemes = filterBrands.slice(firstIndexOfPage, lastIndexOfPage);

  let Pages = [];
  for (let i = 1; i <= Math.ceil(filterBrands.length / itemesPerPage); i++) {
    Pages.push(i);
  }
  let displayPages = Pages.map((item, id) => {
    return (
      <button
        onClick={() => SetCurentPage(item)}
        key={id}
        className={`text-white p-2 text-center rounded-md ${
          currentPage === item ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {item}
      </button>
    );
  });

  let displayBrand = slicedItemes.map((item, id) => {
    return (
      <button
        onClick={() => navigate(`/brands/${item}`)}
        key={id}
        className="border-[2px] px-3 py-1 text-center"
      >
        {item}
      </button>
    );
  });

  return (
    <>
      <Header />
      <section className="flex py-28 flex-col justify-center items-center">
        <div className="flex flex-wrap gap-3 items-center md:w-[65%] w-[94%]">
          {displayBrand}
        </div>
        <div className="flex my-10 flex-wrap gap-4">{displayPages}</div>
      </section>
    </>
  );
};

export default Brands;
