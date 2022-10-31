import "./App.css";
import HomePage from "./pages/Home/HomePage";
import ErrorPage from "./pages/error";
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
