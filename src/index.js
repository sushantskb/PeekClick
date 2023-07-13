import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import Photos from "./Photos.jsx";
import About from "./About.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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