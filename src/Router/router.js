import { createBrowserRouter } from "react-router-dom";
import { lazy,Suspense } from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Other from "../components/Other";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import RestaurantMenu from "../components/RestaurantMenu";
import Shimmer from "../components/Shimmer";
import VirtualComponent from "../components/VirtualComponent";

const Grossary = lazy(() =>import("../components/Grossary"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/virtual",
        element: <VirtualComponent/>,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grossary",
        element: 
          <Suspense fallback={<Shimmer/>}>
            <Grossary />
          </Suspense>
        ,
      },
      {
        path: "other",
        element: <Other />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

export default router;
