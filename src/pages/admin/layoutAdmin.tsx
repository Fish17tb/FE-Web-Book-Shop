/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Input, Layout, Menu } from "antd";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button, Dropdown, Space, Tag } from "antd";
import { useRef } from "react";
// import request from "umi-request";
import "../../antd.css";
import "../../styles/dashboard.scss";

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "标题",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    tooltip: "标题过长会自动收缩",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    disable: true,
    title: "状态",
    dataIndex: "state",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      all: { text: "超长".repeat(50) },
      open: {
        text: "未解决",
        status: "Error",
      },
      closed: {
        text: "已解决",
        status: "Success",
        disabled: true,
      },
      processing: {
        text: "解决中",
        status: "Processing",
      },
    },
  },
  {
    disable: true,
    title: "标签",
    dataIndex: "labels",
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: "创建时间",
    key: "showTime",
    dataIndex: "created_at",
    valueType: "date",
    sorter: true,
    hideInSearch: true,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    valueType: "dateRange",
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: "操作",
    valueType: "option",
    key: "option",
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: "copy", name: "复制" },
          { key: "delete", name: "删除" },
        ]}
      />,
    ],
  },
];

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined className="custom-color-icon" />),
  getItem("Option 2", "2", <DesktopOutlined className="custom-color-icon" />),
  getItem("User", "sub1", <UserOutlined className="custom-color-icon" />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("User", "sub1", <UserOutlined className="custom-color-icon" />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("User", "sub1", <UserOutlined className="custom-color-icon" />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined className="custom-color-icon" />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined className="custom-color-icon" />),
  getItem("Files", "9", <FileOutlined className="custom-color-icon" />),
  getItem("Files", "9", <FileOutlined className="custom-color-icon" />),
  getItem("Files", "9", <FileOutlined className="custom-color-icon" />),
  getItem("Files", "9", <FileOutlined className="custom-color-icon" />),
];

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const actionRef = useRef<ActionType>();

  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Sider
        style={{ background: "#121430" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{ background: "#121430" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Input
            style={{ maxWidth: 300, marginTop: 16, marginLeft: 130 }}
            addonBefore={<SearchOutlined />}
            placeholder="large size"
          />
        </Header>

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "User" }, { title: "Bill" }]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <ProTable<GithubIssueItem>
              columns={columns}
              // actionRef={actionRef}
              cardBordered
              // request={async (params, sort, filter) => {
              //   console.log(sort, filter);
              //   await waitTime(2000);
              //   // return request<{
              //   //   data: GithubIssueItem[];
              //   // }>("https://proapi.azurewebsites.net/github/issues", {
              //   //   params,
              //   // });
              // }}
              editable={{
                type: "multiple",
              }}
              columnsState={{
                persistenceKey: "pro-table-singe-demos",
                persistenceType: "localStorage",
                defaultValue: {
                  option: { fixed: "right", disable: true },
                },
                onChange(value) {
                  console.log("value: ", value);
                },
              }}
              rowKey="id"
              search={{
                labelWidth: "auto",
              }}
              options={{
                setting: {
                  listsHeight: 400,
                },
              }}
              form={{
                // 由于配置了 transform，提交的参数与定义的不同这里需要转化一下
                syncToUrl: (values, type) => {
                  if (type === "get") {
                    return {
                      ...values,
                      created_at: [values.startTime, values.endTime],
                    };
                  }
                  return values;
                },
              }}
              pagination={{
                pageSize: 5,
                onChange: (page) => console.log(page),
              }}
              dateFormatter="string"
              headerTitle="高级表格"
              toolBarRender={() => [
                <Button
                  key="button"
                  icon={<PlusOutlined />}
                  // onClick={() => {
                  //   actionRef.current?.reload();
                  // }}
                  type="primary"
                >
                  新建
                </Button>,
                <Dropdown
                  key="menu"
                  menu={{
                    items: [
                      {
                        label: "1st item",
                        key: "1",
                      },
                      {
                        label: "2nd item",
                        key: "2",
                      },
                      {
                        label: "3rd item",
                        key: "3",
                      },
                    ],
                  }}
                >
                  <Button>
                    <EllipsisOutlined />
                  </Button>
                </Dropdown>,
              ]}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
