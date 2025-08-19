/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
  setAlpha,
} from "@ant-design/pro-components";
import { App, Button, Form, FormProps, Space, theme, Typography } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import "../../../antd.css";
import "../../../styles/login.scss";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
import { loginAPI } from "@/services/auth/login.api";
import { useNavigate } from "react-router-dom";
import { useCurrentApp } from "@/utils/context/app.context";

type LoginType = "phone" | "account";

type FieldType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>("phone");

  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const { message } = App.useApp();

  const {setUser,setIsAuthenticated} = useCurrentApp()

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { email, password } = values;
    setIsSubmit(true);
    const res = await loginAPI(email, password);
    if (res?.data) {
      localStorage.setItem("access_token", res.data.access_token);
      setIsAuthenticated(true)
      setUser(res.data.payload)
      message.success("Login success!");
      navigate("/");
    } else {
      message.error(res.error);
    }
    setIsSubmit(false);
  };

  return (
    <ProConfigProvider hashed={false}>
      <div className="login-container">
        <div className="login-page">
          <LoginForm
            logo="../../../../public/images/Logo/logo-sach.png"
            title="Book Garden"
            subTitle="The world's largest code hosting platform"
            submitter={false}
            onFinish={onFinish}
            actions={
              <Space style={{ color: "#fff" }}>
                Other login methods
                <div className="wrapper-orther-login">
                  <div className="icon-social icon-facebook">
                    <FaFacebookF style={{ color: "#fff" }} />
                  </div>
                  <div className="icon-social icon-google">
                    <FcGoogle />
                  </div>
                  <div className="icon-social icon-github">
                    <TbBrandGithubFilled style={{ color: "#fff" }} />
                  </div>
                </div>
              </Space>
            }
          >
            {/* Form fields */}
            <ProFormText
              name="email"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
                autoFocus: true, // ✅ đặt ở đây
              }}
              placeholder={"username or email"}
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền tên đăng nhập!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"••••••••"}
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền mật khẩu!",
                },
              ]}
            />

            <div style={{ marginBlockEnd: 24 }}>
              <ProFormCheckbox noStyle name="autoLogin">
                Automatic Login
              </ProFormCheckbox>
              <a
                className="forget-password"
                style={{
                  float: "right",
                }}
              >
                forget the password
              </a>
            </div>
            <Form.Item>
              <Button
                className="login-btn"
                type="primary"
                htmlType="submit"
                block
                loading={isSubmit}
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Typography.Text style={{ color: "#aaa" }}>
                Chưa có tài khoản?{" "}
                <a href="/register" style={{ color: "#1890ff" }}>
                  Đăng ký
                </a>
              </Typography.Text>
            </div>
          </LoginForm>
        </div>
      </div>
    </ProConfigProvider>
  );
};

export default LoginPage;
