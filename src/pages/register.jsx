import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Cascader, Select, Checkbox, Button } from 'antd';
const { Option } = Select;
const address = [
  {
    value: 'HCM',
    label: 'Thành phố Hồ Chí Minh',
    children: [
      {
        value: 'distric1',
        label: 'Quận 1',
        children: [
          {
            value: 'nguyencutrinh',
            label: 'phường Nguyễn Cư Trinh',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 8,
      offset: 0,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 16,
    },
    sm: {
      span: 24,
    },
    xl: {
      span: 48,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 8,
      offset: 0,
    },
    sm: {
      span: 32,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value='84'>+84</Option>
        <Option value='86'>+86</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      initialValues={{
        prefix: '84',
      }}
      scrollToFirstError
    >
      <Form.Item
        name='usename'
        label='Tên đăng nhập'
        rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'E-mail không hợp lệ',
          },
          {
            required: true,
            message: 'Vui lòng nhập thông tin email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Mật khẩu'
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin password',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Xác minh mật khẩu'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Mật khẩu không khớp!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name='address'
        label='Địa chỉ'
        rules={[
          {
            type: 'array',
            required: true,
            message: 'vui lòng nhập thông tin!',
          },
        ]}
      >
        <Cascader options={address} />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Số điện thoại'
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin!',
          },
          {
            validator: (_, value) => {
              const patern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
              const checked = patern.test(value);
              if (checked) return Promise.resolve();
              return Promise.reject(
                new Error('Vui lòng nhập đúng số điện thoại')
              );
            },
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name='gender'
        label='Giới tính'
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn thông tin!',
          },
        ]}
      >
        <Select placeholder='Chọn thông tin giới tính'>
          <Option value='male'>Nam</Option>
          <Option value='female'>Nữ</Option>
          <Option value='other'>Khác</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name='agreement'
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Tôi đồng ý với các <a href=''>điều khoản</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
