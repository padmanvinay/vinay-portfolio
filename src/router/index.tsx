import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Work from "../pages/Work";
import PageContent from "@/components/PageContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <PageContent />,
        children: [
          {
            element: <Navigate to="home" />,
            index: true,
          },
          {
            path: "home",
            element: <Home />,
          },

          {
            path: "work",
            element: <Work />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "*",
        element: <>Page not found</>,
      },
    ],
  },
]);
export function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
