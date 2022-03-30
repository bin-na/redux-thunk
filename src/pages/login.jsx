import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  message,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
const { Text } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('infor'));
    if (
      users.some(
        (item) =>
          item.username === values.username && item.password === values.password
      )
    ) {
      localStorage.setItem('username', JSON.stringify(values.username));
      navigate('/infor');
      return;
    }

    message.error('Your username or password is incorrect!');

  //   let isTrue = false;

  //   users.map((user) => {
  //     if (
  //       user.username === values.username &&
  //       user.password === values.password
  //     ) {
  //       isTrue = true;
  //     }
  //   });

  //   if (isTrue) {
  //     if (localStorage.getItem('username')) {
  //       localStorage.removeItem('username');
  //     }
  //     isTrue = false;
  //     localStorage.setItem('username', JSON.stringify(values.username));
  //     navigate('/infor');
  //   } else {
  //     message.error('Your username or password is incorrect!');
  //   }
  // };

  return (
    <div className='my-container'>
      <div className='banner'>
        <div className='inner-banner'>
          <div>
            <Form
              size='normal'
              name='normal_login'
              className='login-form'
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Username'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>
                    <span className='text-banner'>Remember me</span>
                  </Checkbox>
                </Form.Item>

                <a className='login-form-forgot' href=''>
                  <span className='text-banner'>Forgot password</span>
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Log in
                </Button>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='register-form-button'
                >
                  <Link to='/register'>Register</Link>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
