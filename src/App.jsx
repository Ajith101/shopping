import React from "react";
import Header from "./components/Header";
import GlobalDatas from "./globalDatas/GlobalDatas";
import HeroPage from "./HeroPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage";
import CartPage from "./components/cart/CartPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
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
