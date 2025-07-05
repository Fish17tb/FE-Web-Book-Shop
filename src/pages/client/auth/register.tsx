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

type LoginType = "phone" | "account";

const RegisterPage = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>("phone");

  const iconStyles: CSSProperties = {
    marginInlineStart: "16px",
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: "24px",
    verticalAlign: "middle",
    cursor: "pointer",
  };

  return (
    <ProConfigProvider hashed={false}>
      <div className="login-container">
        <div className="register-page">
          <LoginForm
            logo="https://github.githubassets.com/favicons/favicon.png"
            title="Github"
            subTitle="The world's largest code hosting platform"
            submitter={false}
            actions={
              <Space style={{ color: "#fff" }}>
                Other login methods
                <AlipayCircleOutlined style={iconStyles} />
                <TaobaoCircleOutlined style={iconStyles} />
                <WeiboCircleOutlined style={iconStyles} />
              </Space>
            }
          >
            <>
              <ProFormText
                name="fullName"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
                }}
                placeholder={"fullName"}
                rules={[
                  {
                    required: true,
                    message: "fullName không được để trống!",
                  },
                ]}
              />
              <ProFormText
                name="email"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Email"}
                rules={[
                  {
                    required: true,
                    message: "Email không được để trống!",
                  },
                  {
                    type: "email",
                    message: "Email không đúng định dạng!",
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                  strengthText:
                    "Mật khẩu phải chứa số, chữ cái và ký tự đặc biệt, dài ít nhất 8 ký tự.",
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
                    message: "Mật khẩu không được để trống",
                  },
                ]}
              />
              <ProFormText.Password
                name="confirmPassword"
                dependencies={["password"]}
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Xác nhận mật khẩu"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu xác nhận không khớp!")
                      );
                    },
                  }),
                ]}
              />
            </>
            <Form.Item>
              <Button
                className="login-btn"
                type="primary"
                htmlType="submit"
                block
              >
                Đăng ký
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Typography.Text style={{ color: "#aaa" }}>
                Đã có tài khoản?{" "}
                <a href="/register" style={{ color: "#1890ff" }}>
                  Đăng nhập
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

export default RegisterPage;
