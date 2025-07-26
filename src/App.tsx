/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
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

// ✅ Khai báo thủ công ThemeMode đúng như bạn muốn
type ThemeMode = "light" | "dark";

const App = () => {
  return (
    <>
      <SectionHeader />
      <Outlet />
      <SectionFooter />

    </>
  );
};

export default App;

//Nếu bạn muốn sau này switch giữa dark và light qua nút bấm:
{
  /* <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
  Chuyển theme
</button> */
}
