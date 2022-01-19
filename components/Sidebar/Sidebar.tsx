import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

import classes from "./Sidebar.module.scss";

const { Sider } = Layout;

export const Sidebar = () => {
  const sidebar = [
    { id: 1, label: "London", path: "/2643743" },
    { id: 2, label: "New York", path: "/5128581" },
    { id: 3, label: "Berlin", path: "/2950159" },
    { id: 4, label: "Paris", path: "/2988507" },
    { id: 5, label: "Tokyo", path: "/1850147" },
  ];
  return (
    <Sider className={classes.sidebar}>
      <h4 className={classes.title}>WEATHER SPA</h4>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {sidebar.map((item) => (
          <Menu.Item key={item.id}>
            <Link href={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
