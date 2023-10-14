import React, { useState } from "react";
import {
  BankOutlined,
  FileImageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "components/ui";
import { PATH } from "constant";

const { Header, Content, Footer, Sider } = Layout;

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
        {/* <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        /> */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" title="Người dùng" icon={<UserOutlined />}>
            <NavLink to={PATH.users}>Người dùng</NavLink>
          </Menu.Item>
          <Menu.Item
            key="2"
            title="Thông Tin Vị Trí"
            icon={<FileImageOutlined />}
          >
            <NavLink to={PATH.location}>Thông tin vị trí</NavLink>
          </Menu.Item>
          <Menu.Item key="3" title="Thông Tin Phòng" icon={<BankOutlined />}>
            Thông tin phòng
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0 }}
          className="!bg-rose-400 flex justify-end items-center"
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
