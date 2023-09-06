import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppView from "./pages/AppView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppView />,
  },
]);

export const AppRouter = () => (
  <RouterProvider router={router}></RouterProvider>
);
