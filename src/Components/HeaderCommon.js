import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
const { Header} = Layout;
function HeaderCommon() {
    return (
        <div className="container-fluid">
            <div className="header">
            <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
            </div>
        </div>
    )
}

export default HeaderCommon;