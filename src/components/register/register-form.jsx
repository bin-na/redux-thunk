import React from 'react';
import {
  Form,
  Input,
  Cascader,
  Select,
  Checkbox,
  Button,
  Row,
  Col,
  Space,
} from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;
const patern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
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
      span: 24,
      offset: 0,
    },
  },
};

const RegisterForm = () => {
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
    <>
      <h2>Đăng ký thành viên mới</h2>
      <Form
        {...formItemLayout}
        form={form}
        name='register'
        onFinishFailed={onFinish}
        initialValues={{
          prefix: '84',
        }}
        scrollToFirstError
      >
        <Form.Item
          name='username'
          rules={[
            { required: true, message: 'Vui lòng nhập thông tin' },
            {
              validator: (_, value) => {
                if (!value || value.length <= 8) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Tên đăng nhập chỉ giới hạn 8 ký tự')
                );
              },
            },
          ]}
          bordered={false}
        >
          <Input placeholder='Tên Đăng nhập' size='large' />
        </Form.Item>
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
          bordered={false}
        >
          <Input placeholder='Họ và tên' size='large' />
        </Form.Item>
        <Form.Item
          name='email'
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
          <Input placeholder='E-mail' size='large' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập thông tin password',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Mật khẩu' size='large' />
        </Form.Item>

        <Form.Item
          name='confirm'
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
          <Input.Password placeholder='Xác minh mật khẩu' size='large' />
        </Form.Item>
        <Form.Item
          name='address'
          rules={[
            {
              type: 'array',
              required: true,
              message: 'vui lòng nhập thông tin!',
            },
          ]}
        >
          <Cascader options={address} placeholder='Địa chỉ' size='large' />
        </Form.Item>

        <Form.Item
          name='phone'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập thông tin!',
            },

            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || patern.test(getFieldValue('phone'))) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Vui lòng nhập đúng sđt!'));
              },
            }),
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            placeholder='Số điện thoại'
            size='large'
          />
        </Form.Item>
        <Form.Item
          name='gender'
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn thông tin!',
            },
          ]}
        >
          <Select placeholder='Chọn thông tin giới tính' size='large'>
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
                  : Promise.reject(new Error('Vui lòng chọn đồng ý!')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Tôi đồng ý với các <Link to='/'>điều khoản</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' block size='large'>
            Đăng ký
          </Button>
        </Form.Item>
        <Form.Item className='askLogin'>
          <span>Đã có tài khoản?</span>
          <Link to='/login'> Đăng nhập</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
