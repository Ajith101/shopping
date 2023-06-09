import React, { useContext, useState } from "react";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import Header from "../Header";
import ProductsCards from "../productsCards/ProductsCards";

const ProductList = () => {
  const { datass } = useContext(AllProductsList);

  const listOfItemes = datass;

  // pagination
  let itemesPerPAge = 8;
  let [currentPage, setCurrentPage] = useState(1);
  let lastIndexOfpage = itemesPerPAge * currentPage;
  let firstIndexOfPage = lastIndexOfpage - itemesPerPAge;
  const SplicedItemes = listOfItemes.slice(firstIndexOfPage, lastIndexOfpage);
  const displayItemes = SplicedItemes.map((itemes, id) => {
    return <ProductsCards item={itemes} key={id} />;
  });

  const Pages = [];
  for (let i = 1; i <= Math.ceil(listOfItemes.length / itemesPerPAge); i++) {
    Pages.push(i);
  }
  const disolayPages = Pages.map((itemesss, id) => {
    return (
      <button
        onClick={() => setCurrentPage(itemesss)}
        className={`p-2 rounded-md text-center text-white ${
          currentPage === itemesss ? "bg-green-600" : "bg-red-600"
        }`}
        key={id}
      >
        {itemesss}
      </button>
    );
  });

  return (
    <>
      <Header />
      <nav className="flex py-28 flex-col justify-center items-center">
        <div className="grid w-[96%] md:w-[90%] lg:w-[60%] gap-5 grid-cols-2 md:grid-cols-4">
          {displayItemes}
        </div>
        <div className="flex flex-wrap my-10 justify-center items-center gap-3">
          {disolayPages}
        </div>
      </nav>
    </>
  );
};

export default ProductList;
