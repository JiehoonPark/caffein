import React from "react";
import { useRoutes } from "react-router";
import Home from "../pages/Home";
import CampDetail from "../pages/CampDetail";

export default function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/camp/:id", element: <CampDetail /> },
    {
      path: "*",
      element: <Home />,
    },
  ]);
  return routes;
}
