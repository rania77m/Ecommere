import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails";
import ShopCart from "./Components/ShopCart/ShopCart";
import { Toaster } from "react-hot-toast";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },
        { path: "checkout", element: <Checkout /> },
        { path: "cart", element: <Cart /> },
        { path: "shopcart/checkout", element: <Checkout /> },
        { path: "shopcart", element: <ShopCart /> },
        { path: "shopcart/cart", element: <Cart /> },

        { path: "productsdetails/:id", element: <ProductsDetails /> },

      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <div>
        <RouterProvider router={routes}> </RouterProvider>
        <Toaster/>
      </div>
    </div>

    
  );
}
