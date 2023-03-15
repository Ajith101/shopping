import React from "react";
import Header from "./components/Header";
import GlobalDatas from "./globalDatas/GlobalDatas";
import HeroPage from "./HeroPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage";
import CartPage from "./components/cart/CartPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CategoryWise from "./components/categoryList/CategoryWise";
import ItemDetails from "./components/productsCards/ItemDetails";
import ProductList from "./components/productsPage/ProductList";
import CateGoryMainList from "./components/categoryList/CateGoryMainList";
import Brands from "./components/brands/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/category/:id",
    element: <CategoryWise />,
  },
  {
    path: "/itemdetails/:id",
    element: <ItemDetails />,
  },
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/categorylist",
    element: <CateGoryMainList />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },
]);

const App = () => {
  return (
    <>
      <GlobalDatas>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </GlobalDatas>
    </>
  );
};

export default App;
