import React, { useContext } from "react";
import { AllProductsList } from "../globalDatas/GlobalDatas";
import ProductsCards from "./productsCards/ProductsCards";

const ProductForYou = () => {
  const { datass } = useContext(AllProductsList);
  const displayProducts = datass.map((item, id) => {
    if (id < 4) {
      return <ProductsCards item={item} key={id} />;
    }
  });
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="md:text-4xl text-2xl font-bold p-3">Products For you</h1>
      <div className="grid w-[96%] md:w-[90%] lg:w-[60%] gap-5 grid-cols-2 md:grid-cols-4">
        {displayProducts}
      </div>
    </section>
  );
};

export default ProductForYou;
