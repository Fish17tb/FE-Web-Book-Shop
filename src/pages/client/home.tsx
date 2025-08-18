/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FilterTwoTone, ReloadOutlined } from "@ant-design/icons";
import {
  // Row,
  // Col,
  // Form,
  // Checkbox,
  // Divider,
  // InputNumber,
  // Button,
  // Rate,
  // Tabs,
  // Pagination,
  // Carousel,
  Layout,
} from "antd";
// import type { FormProps } from 'antd';
import "../../styles/home.scss";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
// import img1 from "../../assets/images/img1.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FieldType = {
  fullName: string;
  password: string;
  email: string;
  phone: string;
};

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "200px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const HomePage = () => {
  return (
    <>  
        <Layout style={{height: "100vh"}}>
          <Sider
            width="25%"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Sider
          </Sider>
          <Content
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Content
          </Content>
        </Layout>
    </>
  );
};

export default HomePage;
