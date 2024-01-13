import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContactMe from "./components/ContactMe.jsx";
import ProjectCardBox from "./components/ProjectCardBox.jsx";
import AboutMe from "./components/AboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/ContactMe",
        element: <ContactMe />,
      },
      {
        path: "/Projects",
        element: <ProjectCardBox />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
