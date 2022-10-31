import "./App.css";
import HomePage from "./pages/Home/HomePage";
import ErrorPage from "./pages/error";
import { store } from "./states/store";
import React from "react";
import { Provider } from "react-redux";
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};

export default App;
