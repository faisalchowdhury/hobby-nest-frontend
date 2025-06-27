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
import Dashboard from "../Dashboard/Dashboard";
import DashboardDefault from "../Component/DashboardDefault";
import AllGroupDashboard from "../Dashboard/AllGroupDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RegularLayout,

    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://hobbynest-server.vercel.app/sorted-groups"),
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
        path: "group/:id",
        Component: GroupDetails,
        loader: ({ params }) =>
          fetch(`https://hobbynest-server.vercel.app/group/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "all-groups",
        Component: AllGroups,
        loader: () => fetch("https://hobbynest-server.vercel.app/all-groups"),
        hydrateFallbackElement: <Loading></Loading>,
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
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,

    children: [
      {
        path: "/dashboard",
        index: true,
        element: (
          <PrivateRoute>
            <DashboardDefault></DashboardDefault>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/create-group",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-groups",
        element: (
          <PrivateRoute>
            <MyGroups></MyGroups>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-groups",
        element: (
          <PrivateRoute>
            <AllGroupDashboard></AllGroupDashboard>
          </PrivateRoute>
        ),
        loader: () => fetch("https://hobbynest-server.vercel.app/all-groups"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
