import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import Header from "../Header";

const CateGoryMainList = () => {
  const { datass } = useContext(AllProductsList);
  const navigate = useNavigate();
  // category Names
  const nameOfCategory = datass.map((itemes) => {
    return itemes.category;
  });
  const filteredNames = nameOfCategory.filter((item, id) => {
    return nameOfCategory.indexOf(item) === id;
  });
  let displayNames = filteredNames.map((item, id) => {
    return (
      <button
        onClick={() => navigate(`/category/${item}`)}
        className="border-[2px] px-3 py-1 text-center"
        key={id}
      >
        {item}
      </button>
    );
  });

  return (
    <>
      <Header />
      <nav className="flex py-28 flex-col justify-center items-center">
        <div className="flex gap-5 justify-center items-center w-[90%] md:w-[60%] flex-wrap">
          {displayNames}
        </div>
      </nav>
    </>
  );
};

export default CateGoryMainList;
