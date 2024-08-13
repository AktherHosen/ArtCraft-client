import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddCraft from "../pages/AddCraft";
import AllArtCraft from "../pages/AllArtCraft";
import CraftDetails from "../pages/CraftDetails";
import MyArtCraft from "../pages/MyArtCraft";
import EditCraft from "../pages/EditCraft";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoutes>
            <AddCraft />
          </PrivateRoutes>
        ),
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraft />,
        loader: () => fetch("http://localhost:5000/allcraft"),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRoutes>
            <CraftDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allcraft/${params.id}`),
      },
      {
        path: "/myArtCraft/:email",
        element: (
          <PrivateRoutes>
            <MyArtCraft />
          </PrivateRoutes>
        ),
      },
      {
        path: "/editMyCraft/:id",
        element: (
          <PrivateRoutes>
            <EditCraft />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allcraft/${params.id}`),
      },
    ],
  },
]);

export default Routes;
