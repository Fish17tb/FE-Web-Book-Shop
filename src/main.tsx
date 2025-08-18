import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyApp from "@/MyApp";
import { App } from "antd";
import LoginPage from "pages/client/auth/login.tsx";
import RegisterPage from "pages/client/auth/register";
import HomePage from "pages/client/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyApp />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contacts",
        element: <div>Xin chao VN</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
