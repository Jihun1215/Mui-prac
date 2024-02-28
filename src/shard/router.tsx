import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";

import { Home } from "../pages/Home"

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
    ],
  },
]);
