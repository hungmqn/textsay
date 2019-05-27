import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Row, Col, Layout, Menu, Typography, Icon } from 'antd';
import './index.css';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const { SubMenu, ItemGroup } = Menu;

const Home = () => {
  const [ current, setSelectedKeys ] = useState('home');

  return (
    <Layout className="app">
      <Header>
      {/* <div className="logo" /> */}
      <Menu
        // theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
        onClick={e => setSelectedKeys(e.key)} 
        selectedKeys={[current]}
      >
        <Menu.Item key="home">
          <a href="/" rel="noopener noreferrer">
            <Icon type="home" /> 
            Home
          </a>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" />
              User
            </span>
          }
        >
          <ItemGroup title="Has an account?">
            {/* <Menu.Item key="user:login">Login</Menu.Item> */}
            <Menu.Item key="user:login">
              <Link to="/login">
                <Icon type="login" />
                Login
              </Link>
            </Menu.Item>
          </ItemGroup>
          <ItemGroup title="Not yet?">
            {/* <Menu.Item key="user:register">Register</Menu.Item> */}
            <Menu.Item key="user:register">
              <Link to="/register">
                <Icon type="user-add" />
                Register
              </Link>
            </Menu.Item>
          </ItemGroup>
        </SubMenu>
      </Menu>
      </Header>
      <Content>
        <br />
        <Row>
          <Col span={12} offset={6}>
            <Title level={2} type="danger">Welcome to TextSay</Title>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Content>
      <Footer>
        © TextSay 2019
      </Footer>
    </Layout>
  );
}

export default Home;
