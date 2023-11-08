import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";

import { Home } from "../Pages/Home";
import { Signin, Signup } from "../Pages/Sign";

import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: (
    //   <Suspense fallback={null}>
    //     <NotFound />
    //   </Suspense>
    // ),
    children: [
      {
        element: <Layout />,
        children: [{ path: "/", element: <Home /> }],
      },
      {
        element: <Layout />,
        children: [{ path: "/signup", element: <Signup /> }],
      },
      {
        element: <Layout />,
        children: [{ path: "/signin", element: <Signin /> }],
      },
    ],
  },
]);
