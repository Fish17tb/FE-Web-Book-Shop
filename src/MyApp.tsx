/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import LayoutAdmin from "./pages/admin/layoutAdmin";
import themeConfig from "./theme";
import { ConfigProvider } from "antd";
import LoginPage from "./pages/client/auth/login";
import RegisterPage from "./pages/client/auth/register";
import HomePage from "./pages/client/home";
import SectionHeader from "./components/layout/sectionHeader";
import SectionFooter from "./components/layout/sectionFooter";
import { Outlet } from "react-router-dom";
import { fetchAccountAPI } from "./services/auth/fetchAccount";
import { useCurrentApp } from "./utils/context/app.context";
import Spinner from "./components/shared/Spinner/spinner";

// ✅ Khai báo thủ công ThemeMode đúng như bạn muốn
type ThemeMode = "light" | "dark";

const MyApp = () => {
  const { setUser, setIsAuthenticated, isAppLoading, setIsAppLoading } =
    useCurrentApp();

  useEffect(() => {
    const fetchAccount = async () => {
      const res = await fetchAccountAPI();
      if (res && res.data) {
        setIsAuthenticated(true);
        setUser(res.data);
      }
      setIsAppLoading(false);
    };

    fetchAccount();
  }, []);

  return (
    <>
      {isAppLoading === false ? (
        <div>
          <SectionHeader />
          <Outlet />
          <SectionFooter />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default MyApp;

//Nếu bạn muốn sau này switch giữa dark và light qua nút bấm:
{
  /* <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
  Chuyển theme
</button> */
}
