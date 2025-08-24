import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyApp from "@/MyApp";
import { App } from "antd";
import LoginPage from "pages/client/auth/login.tsx";
import RegisterPage from "pages/client/auth/register";
import HomePage from "pages/client/home.tsx";
import { AppProvider } from "./utils/context/app.context";
import ProtectedRound from "./components/shared/ProtectedRound/ProtectedRound";
import LayoutAdmin from "./pages/admin/layoutAdmin";
import Page403 from "./components/shared/ErrorPage/403/Page403";
import Page404 from "./components/shared/ErrorPage/404/Page404";

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
      {
        path: "/checkout",
        element: (
          <ProtectedRound>
            <div>this is page checkout</div>
          </ProtectedRound>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRound>
            <div>this is page order</div>
          </ProtectedRound>
        ),
      },
      {
        path: "/history",
        element: (
          <ProtectedRound>
            <div>this is page history</div>
          </ProtectedRound>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRound>
            <LayoutAdmin />
          </ProtectedRound>
        ),
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

  //  Route riêng cho lỗi
  {
    path: "/403",
    element: <Page403 />,
  },
  {
    path: "*", // bất kỳ path nào không khớp sẽ vào đây
    element: <Page404 />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </App>
  </StrictMode>
);
