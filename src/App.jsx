import React from "react";
import GlobalDatas from "./globalDatas/GlobalDatas";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./components/NVdatas";

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
