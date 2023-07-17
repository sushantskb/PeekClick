import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import Photos from "./Photos.jsx";
import About from "./About.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/home",
    element:<App />
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "photos",
    element: <Photos />,
  },
  {
    path: "about",
    element: <About />,
  },
]);


ReactDOM.render(
  <>
    <RouterProvider router={router}/>
  </>,
  document.getElementById("root")
)