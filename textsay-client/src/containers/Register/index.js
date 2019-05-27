import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, navigate } from '@reach/router';

import { actions as authActions } from '../../store/auth/auth.meta';

import { Row, Col, Typography, Divider, Form, Input, Button, Icon, } from 'antd';
import './index.css';

const { Title } = Typography;

const Register = (props) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const {
    form: { getFieldDecorator, validateFields },
    auth,
    register,
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log('username: ', username)
        console.log('password: ', password)
        register(username, password);
      }
    });
  }

  useEffect(() => {
    if (auth.id && auth.token) {
      navigate('/profile')
    }
  }, [auth]);

  return (
    <div className="login-form">
      <header>
        <Row>
          <Col span={8} offset={8} className="form-content">
            <Title level={3}>
              Register
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
                  Register
                </Button>
              </Form.Item>
            </Form>
            <Divider></Divider>
            <Link to="/login">Login</Link>
          </Col>
        </Row>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(authActions.register({ username: username, password: password }))
})

const ConnectedRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default Form.create()(ConnectedRegister);
