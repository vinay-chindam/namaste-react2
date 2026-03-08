import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Other from "../components/Other";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import RestaurantMenu from "../components/RestaurantMenu"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "other",
        element: <Other />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Profile />
          },
          {
            path: "settings",
            element: <Settings />
          }
        ]
      }
    ]
  }
]);

export default router;