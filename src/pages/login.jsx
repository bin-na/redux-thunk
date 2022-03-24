import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className='formLogin'
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Tên đăng nhập'
        name='username'
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className='password'
        label='Mật khẩu'
        name='password'
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
