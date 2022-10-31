import "./App.css";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/// Routes config
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

const App: React.FC<{}> = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
