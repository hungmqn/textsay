import { Layout, Menu, Breadcrumb, Icon, Modal, Form, Input, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { actions as authActions } from '../../store/auth/auth.meta';

import './index.css';

const { SubMenu, ItemGroup } = Menu;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Profile = (props) => {
  const {
    form: { getFieldDecorator, validateFields },
    auth,
    changePassword,
    logout,
  } = props;

  const [visible, showModal] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ old_password, setOldPassword ] = useState('');
  const [ new_password, setNewPassword ] = useState('');

  const handleUpdatePassword = () => {
    validateFields((err, values) => {
      if (!err) {
        changePassword(auth.id, username, old_password, new_password);
      }
    });
    ;
  };

  /* call once when mounted
  put values (such as props) on array, if one of the values changes, it will be called */
  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (!token) {
      navigate('/login')
    }
  }, [auth]);
  

  /* call every render, on mounted or updated
  useEffect(() => {
    console.log('mounted or updated')
  });
  */

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
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
          <Menu.Item key="3" onClick={() => showModal(true)}>
            <Icon type="setting" />
            Change password
          </Menu.Item>
          <Modal
            title="Change password"
            visible={visible}
            onOk={handleUpdatePassword}
            confirmLoading={auth.isLoading}
            onCancel={() => showModal(false)}
          >
            <Form method="post">
              <Title level={4} type="danger">{auth.message}</Title>
              <Form.Item>
                {
                  (getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username' }],
                  })) (<Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                  />)
                }
              </Form.Item>
              <Form.Item>
                {
                  (getFieldDecorator('old_password', {
                    rules: [{ required: true, message: 'Please input your old password' }],
                  })) (<Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Old password"
                    onChange={e => setOldPassword(e.target.value)}
                  />)
                }
              </Form.Item>
              <Form.Item>
                {
                  (getFieldDecorator('new_password', {
                    rules: [{ required: true, message: 'Please input your new password' }],
                  })) (<Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="New Password"
                    onChange={e => setNewPassword(e.target.value)}
                  />)
                }
              </Form.Item>
            </Form>
          </Modal>
          <Menu.Item key="4" onClick={logout}>
            <Icon type="logout" />
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logout()),
  changePassword: (id, username, password, new_password) => dispatch(authActions.changePassword({id, username, password, new_password}))
})

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Form.create()(ConnectedProfile);

