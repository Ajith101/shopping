import MainPage from "../MainPage";
import Brands from "./brands/Brands";
import BrandsList from "./brands/BrandsList";
import CartPage from "./cart/CartPage";
import CateGoryMainList from "./categoryList/CateGoryMainList";
import CategoryWise from "./categoryList/CategoryWise";
import ItemDetails from "./productsCards/ItemDetails";
import ProductList from "./productsPage/ProductList";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
  {
    path: "/brands/:id",
    element: <BrandsList />,
  },
]);
