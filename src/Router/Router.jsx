import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegularLayout from "../Layout/RegularLayout";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";
import GroupDetails from "../Pages/GroupDetails";
import AllGroups from "../Pages/AllGroups";
import MyGroups from "../Pages/MyGroups";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RegularLayout,

    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/sorted-groups"),
      },
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
      {
        path: "group/:id",
        Component: GroupDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/group/${params.id}`),
      },
      {
        path: "all-groups",
        Component: AllGroups,
        loader: () => fetch("http://localhost:3000/all-groups"),
      },
      {
        path: "my-groups",
        Component: MyGroups,
      },
    ],
  },
]);
