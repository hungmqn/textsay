import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { actions as authActions } from '../../store/auth/auth.meta';

import { Row, Col, Typography, Divider, Form, Input, Button, Icon, } from 'antd';
import './index.css';

const { Title } = Typography;

const Login = (props) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const {
    form: { getFieldDecorator, validateFields },
    auth,
    login,
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        login(username, password);
      }
    });
  }

  /* call once when mounted
  put values (such as props) on array, if one of the values changes, it will be called */
  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      navigate('/profile')
    }
  }, [auth]);
  

  /* call every render, on mounted or updated
  useEffect(() => {
    console.log('mounted or updated')
  });
  */

  return (
    <div className="login-form">
      <header>
        <Row>
          <Col span={8} offset={8} className="form-content">
            <Title level={3}>
              Login
            </Title>
            <Form onSubmit={handleSubmit} method="post">
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
                  (getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password' }],
                  })) (<Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />)
                }
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" disabled={auth.isLoading} loading={auth.isLoading}>
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Divider></Divider>
            <Link to="/register">Register</Link>
          </Col>
        </Row>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => ({
  // login: (username, password) => dispatch(authActions.login({ username: username, password: password })),
  login: (username, password) => dispatch(authActions.signin({ username: username, password: password })),
})

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Form.create()(ConnectedLogin);
