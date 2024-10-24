import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./page/Home";
import CartSystem from "./cart/Cart";
import { CartProvider } from "./cart/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path:
      "/cart",
    element: <CartSystem />
  }
])

export default function App() {
  return <CartProvider>  <RouterProvider router={router}></RouterProvider></CartProvider>

}
