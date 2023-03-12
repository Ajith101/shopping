import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import Header from "../Header";
import ProductsCards from "../productsCards/ProductsCards";

const CategoryWise = () => {
  const { datass } = useContext(AllProductsList);
  const params = useParams();
  //   console.log(params.id);

  const showItemesBYcategory = datass.filter((itemes) => {
    return itemes.category === params.id;
  });

  const displayProducts = showItemesBYcategory.map((itemes, id) => {
    return <ProductsCards key={id} item={itemes} />;
  });

  return (
    <>
      <Header />
      <section className="flex py-28 flex-col justify-center items-center">
        <div className="md:w-[88%] flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl uppercase">{params.id} Products</h1>
          <div className="grid w-[96%] md:w-[100%] lg:w-[100%] gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {displayProducts}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWise;
