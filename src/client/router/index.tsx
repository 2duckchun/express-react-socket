import Home from "../pages/Home";
import About from "../pages/About";
import { createBrowserRouter } from "react-router-dom";
import { AllChatPage } from "../pages/AllChat";
import { DefaultLayout } from "../layout/default";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "all-chat",
        element: <AllChatPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
