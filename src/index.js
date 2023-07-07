import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App.jsx";
import Contact from "./Contact.jsx"
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
]);


ReactDOM.render(
  <>
    <RouterProvider router={router}/>
  </>,
  document.getElementById("root")
)