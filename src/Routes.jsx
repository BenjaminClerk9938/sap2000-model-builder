import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MacBookPro140ne from "./pages/MacBookPro14One";
import MacBookPro14Three from "./pages/MacBookPro14Three";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "macbookpro14one",
      element: <MacBookPro140ne />,
    },
    { path: "macbookpro14three", element: <MacBookPro14Three /> },
  ]);
  return element;
};
export default ProjectRoutes;
