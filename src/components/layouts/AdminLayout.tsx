import React, { useState } from "react";
import {
  BankOutlined,
  FileImageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
// import Users from "./Users/Users";

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
  getItem("Người Dùng", "sub1", <UserOutlined />),
  getItem("Thông Tin Vị Trí", "sub2", <FileImageOutlined />),
  getItem("Thông Tin Phòng", "9", <BankOutlined />),
];
export const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical">
          <img
            src="/images/logo-header.png"
            className="w-full h-full px-[30px] py-[10px]"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0 }}
          className="!bg-rose-200 flex justify-end items-center"
        >
          <div className="flex items-center rounded-full border border-blue-600 h-[40px] w-[40px] mr-[10px]">
            <UserOutlined className="w-7 h-7 ml-[12px]" />
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          {/* <div style={{ padding: 24, minHeight: 360 }}></div> */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
