import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import Header from "../Header";
import ProductsCards from "../productsCards/ProductsCards";

const BrandsList = () => {
  const { datass } = useContext(AllProductsList);
  const params = useParams();
  const filteredBrands = datass.filter((items) => {
    return items.brand === params.id;
  });
  const displayItemes = filteredBrands.map((itemss, id) => {
    return <ProductsCards item={itemss} key={id} />;
  });

  return (
    <>
      <Header />
      <section className="flex py-28 flex-col justify-center items-center">
        <div className="grid w-[96%] md:w-[90%] lg:w-[60%] gap-5 grid-cols-2 md:grid-cols-4">
          {displayItemes}
        </div>
      </section>
    </>
  );
};

export default BrandsList;
