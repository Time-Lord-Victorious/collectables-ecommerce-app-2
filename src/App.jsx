import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./page/Home";
import CartSystem from "./cart/Cart";
import { CartProvider } from "./cart/CartContext";
import AuthPage from "./page/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./components/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path:
      "/cart",
    element: <CartSystem />
  }, {
    path: "/login",
    element: <AuthPage />
  }, {
    path: "/profile",
    element: <ProfilePage />
  }, {
    path: '*',
    element: <AuthPage />
  }
])

export default function App() {
  return <CartProvider>  <RouterProvider router={router}></RouterProvider></CartProvider>

}