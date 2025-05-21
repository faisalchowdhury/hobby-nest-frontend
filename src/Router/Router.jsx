import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegularLayout from "../Layout/RegularLayout";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/sorted-groups"),
      },
    ],
  },
  {
    Component: RegularLayout,

    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "create-group",
        Component: CreateGroup,
      },
    ],
  },
]);
