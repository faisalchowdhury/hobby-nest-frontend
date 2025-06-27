import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegularLayout from "../Layout/RegularLayout";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";
import GroupDetails from "../Pages/GroupDetails";
import AllGroups from "../Pages/AllGroups";
import MyGroups from "../Pages/MyGroups";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../Pages/NotFound";
import Loading from "../Component/Loading";
import Contact from "../Pages/Contact";
import Aboutus from "../Pages/Aboutus";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RegularLayout,

    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/sorted-groups"),
        hydrateFallbackElement: <Loading></Loading>,
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
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "group/:id",
        Component: GroupDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/group/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "all-groups",
        Component: AllGroups,
        loader: () => fetch("http://localhost:3000/all-groups"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "my-groups",
        element: (
          <PrivateRoute>
            <MyGroups></MyGroups>
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "aboutus",
        Component: Aboutus,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
