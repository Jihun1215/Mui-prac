import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";

import { Signin, Signup } from "pages/Sign";
import { Home, Mypage, Tab } from "pages";

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
      {
        element: <Layout />,
        children: [{ path: "/mypage", element: <Mypage /> }],
      },
      {
        element: <Layout />,
        children: [{ path: "/tab", element: <Tab /> }],
      },
    ],
  },
]);
