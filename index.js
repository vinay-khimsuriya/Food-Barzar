import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./src/App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contect from "./src/component/Contect";
import Error from "./src/component/Error";
import RestaurantContainer from "./src/component/RestaurantContainer";
import RestaruntMenu from "./src/component/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./src/utils/AppStore";
import Navbar from "./src/component/Navbar";
const About = lazy(() => import("./src/component/About"));

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loding..........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contect",
        element: <Contect />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/restaurants/:resId",
    element: (
      <Provider store={appStore}>
        <Navbar className="mynavbar"></Navbar>
        <RestaruntMenu />
      </Provider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={createRouter} />);
