import React, { createContext, useEffect, useState } from "react";

export const AllProductsList = createContext();
const GlobalDatas = ({ children }) => {
  const [datass, setDatass] = useState([]);

  async function getDatas() {
    fetch("https://dummyjson.com/products?&limit=100")
      .then((response) => response.json())
      .then((datas) => setDatass(datas.products));
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <AllProductsList.Provider value={{ datass }}>
      {children}
    </AllProductsList.Provider>
  );
};

export default GlobalDatas;
