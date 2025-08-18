/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {
  FacebookFilled,
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
  setAlpha,
} from "@ant-design/pro-components";
import {
  App,
  Button,
  Col,
  Form,
  FormProps,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import "../../../antd.css";
import "../../../styles/register.scss";
import { FaFacebook, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "@/services/auth/register.api";

type LoginType = "phone" | "account";

type FieldType = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

const RegisterPage = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>("phone");

  const navigate = useNavigate();

  const { message } = App.useApp();

  const [isSubmit, setIsSubmit] = useState(false);

  // const iconStyles: CSSProperties = {
  //   // marginInlineStart: "16px",
  //   fontSize: "14px",
  //   verticalAlign: "middle",
  //   cursor: "pointer",
  // };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { fullName, email, phone, password } = values;
    const res = await registerAPI(fullName, email, phone, password);
    setIsSubmit(true);
    if (res?.data) {
      console.log("Ck-res", res);
      message.success("Đăng ký thành công!");
      navigate("/login");
    }
    setIsSubmit(false);
  };

  return (
    <ProConfigProvider hashed={false}>
      <div className="register-container">
        <div className="register-page">
          <LoginForm
            logo="../../../../public/images/Logo/logo-sach.png"
            title="Book Garden"
            subTitle="The world's largest code hosting platform"
            submitter={false}
            onFinish={onFinish}
            actions={
              <Space style={{ color: "#fff" }}>
                Other register methods
                <div className="wrapper-orther-register">
                  <div className="icon-social icon-facebook">
                    {" "}
                    <FaFacebookF style={{ color: "#fff" }} />
                  </div>
                  <div className="icon-social icon-google">
                    {" "}
                    <FcGoogle />
                  </div>
                  <div className="icon-social icon-github">
                    {" "}
                    <TbBrandGithubFilled style={{ color: "#fff" }} />
                  </div>
                </div>
              </Space>
            }
          >
            <div></div>
            <>
              <ProFormText
                name="fullName"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Full Name"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền đầy đủ full name!",
                  },
                ]}
              />
              <ProFormText
                name="email"
                fieldProps={{
                  size: "large",
                  prefix: <MdOutlineEmail className={"prefixIcon"} />,
                }}
                placeholder={"Email"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền email!",
                  },
                  {
                    type: "email",
                    message: "Email không hợp lệ!",
                  },
                ]}
              />
              <ProFormText
                name="phone"
                fieldProps={{
                  size: "large",
                  prefix: <PhoneOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Phone"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền số điện thoại!",
                  },
                  {
                    pattern: /^[0-9]{9,11}$/,
                    message: "Số điện thoại không hợp lệ!",
                  },
                ]}
              />

              <Row gutter={16}>
                <Col span={12}>
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
                </Col>
                <Col span={12}>
                  <ProFormText.Password
                    name="confirmPassword"
                    dependencies={["password"]}
                    fieldProps={{
                      size: "large",
                      prefix: <LockOutlined className={"prefixIcon"} />,
                    }}
                    placeholder={"Confirm Password"}
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
                </Col>
              </Row>
            </>
            <Form.Item>
              <Button
                className="register-btn"
                type="primary"
                htmlType="submit"
                block
                loading={isSubmit}
              >
                Đăng ký
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Typography.Text style={{ color: "#aaa" }}>
                Đã có tài khoản?{" "}
                <a href="/login" style={{ color: "#1890ff" }}>
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
