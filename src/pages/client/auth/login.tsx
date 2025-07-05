/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
  setAlpha,
} from "@ant-design/pro-components";
import { Button, Form, Space, theme, Typography } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import "../../../antd.css";
import "../../../styles/login.scss";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type LoginType = "phone" | "account";

const LoginPage = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>("phone");

  const iconStyles: CSSProperties = {
    // marginInlineStart: "16px",
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: "24px",
    verticalAlign: "middle",
    cursor: "pointer",
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
            actions={
              <Space style={{ color: "#fff" }}>
                Other login methods
                <div className="wrapper-orther-login">
                  < FaFacebook  style={iconStyles} />
                <FcGoogle  style={iconStyles} />
                <FaGithub  style={iconStyles} />
                </div>
              </Space>
            }
          >
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
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
                  strengthText:
                    "Password should contain numbers, letters and special characters, at least 8 characters long.",
                  statusRender: (value) => {
                    const getStatus = () => {
                      if (value && value.length > 12) {
                        return "ok";
                      }
                      if (value && value.length > 6) {
                        return "pass";
                      }
                      return "poor";
                    };
                    const status = getStatus();
                    if (status === "pass") {
                      return (
                        <div style={{ color: token.colorWarning }}>
                          Mật khẩu: khỏe
                        </div>
                      );
                    }
                    if (status === "ok") {
                      return (
                        <div style={{ color: token.colorSuccess }}>
                          Mật khẩu: trung bình
                        </div>
                      );
                    }
                    return (
                      <div style={{ color: token.colorError }}>
                        Mật khẩu: yếu
                      </div>
                    );
                  },
                }}
                placeholder={"••••••••"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền mật khẩu!",
                  },
                ]}
              />
            </>

            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                Automatic Login
              </ProFormCheckbox>
              <a className="forget-password"
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
                {/* Nếu dùng React Router:
    <Link to="/register" style={{ color: "#1890ff" }}>
      Đăng ký
    </Link> */}
              </Typography.Text>
            </div>
          </LoginForm>
        </div>
      </div>
    </ProConfigProvider>
  );
};

export default LoginPage;
