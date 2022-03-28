// import React, { useState } from 'react';
// import { Form, Input, Cascader, Select, Checkbox, Button, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// const key = 'updatable';

// const openMessage = (text) => {
//   message.error(text, 2);
// };

// const openMessageSuccess = (text) => {
//   message.success(text, 2);
// };

// const { Option } = Select;
// const patern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
// const address = [
//   {
//     value: 'HCM',
//     label: 'Thành phố Hồ Chí Minh',
//     children: [
//       {
//         value: 'distric1',
//         label: 'Quận 1',
//         children: [
//           {
//             value: 'nguyencutrinh',
//             label: 'phường Nguyễn Cư Trinh',
//           },
//         ],
//       },
//     ],
//   },
// ];
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 8,
//       offset: 0,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 16,
//     },
//     sm: {
//       span: 24,
//     },
//     xl: {
//       span: 48,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 8,
//       offset: 0,
//     },
//     sm: {
//       span: 24,
//       offset: 0,
//     },
//   },
// };

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const [userInfor, setUserInfor] = useState({
//     username: '',
//     full_name: '',
//     email: '',
//     password: '',
//     confirm_password: '',
//     address: ['', '', ''],
//     phone_number: '',
//     gender: '',
//   });
//   const [term, setTerm] = useState(false);
//   const [form] = Form.useForm();
//   // const onChangeTerm = (e) => {
//   //   setTerm(e.target.checked);
//   // };
//   // const onChangeSelect = (value) => {
//   //   setUserInfor({ ...userInfor, gender: value });
//   // };
//   // const onChangeAdress = (value) => {
//   //   setUserInfor({ ...userInfor, address: value });
//   // };
//   // const onChangeRegisterForm = (e) => {
//   //   setUserInfor({ ...userInfor, [e.target.name]: e.target.value });
//   // };
//   // const onFinish = (e) => {
//   //   openMessage(
//   //     'Please fill all the required and check in agree term and policy!!'
//   //   );
//   // };
//   const onFinish = (e, values) => {
//     e.preventDefault();
//     console.log(values);
//   };

//   // const onSubmitForm = () => {
//   //   if (
//   //     !userInfor.username ||
//   //     !userInfor.full_name ||
//   //     !userInfor.email ||
//   //     !userInfor.password ||
//   //     !userInfor.confirm_password ||
//   //     !userInfor.address ||
//   //     !userInfor.phone ||
//   //     !userInfor.gender ||
//   //     !term
//   //   ) {
//   //     openMessageSuccess('Register successfully!');
//   //     localStorage.setItem('infor', JSON.stringify(userInfor));
//   //     navigate('/infor');
//   //   }
//   // };

//   const prefixSelector = (
//     <Form.Item name='prefix' noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value='84'>+84</Option>
//         <Option value='86'>+86</Option>
//       </Select>
//     </Form.Item>
//   );
//   return (
//     <>
//       <h2>Đăng ký thành viên mới</h2>
//       <Form
//         {...formItemLayout}
//         form={form}
//         name='register'
//         onFinish={onFinish}
//         onFinishFailed={onFinish}
//         initialValues={{
//           prefix: '84',
//         }}
//         scrollToFirstError
//       >
//         <Form.Item
//           name='username'
//           rules={[
//             { required: true, message: 'Vui lòng nhập thông tin' },
//             {
//               validator: (_, value) => {
//                 if (!value || value.length <= 8) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(
//                   new Error('Tên đăng nhập chỉ giới hạn 8 ký tự')
//                 );
//               },
//             },
//           ]}
//         >
//           <Input
//             name='username'
//             value={userInfor.username}
//             // onChange={onChangeRegisterForm}
//             placeholder='Tên Đăng nhập'
//             size='large'
//           />
//         </Form.Item>
//         <Form.Item
//           name='name'
//           rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
//         >
//           <Input
//             name='full_name'
//             value={userInfor.full_name}
//             // onChange={onChangeRegisterForm}
//             placeholder='Họ và tên'
//             size='large'
//           />
//         </Form.Item>
//         <Form.Item
//           name='email'
//           rules={[
//             {
//               type: 'email',
//               message: 'E-mail không hợp lệ',
//             },
//             {
//               required: true,
//               message: 'Vui lòng nhập thông tin email!',
//             },
//           ]}
//         >
//           <Input
//             name='email'
//             value={userInfor.email}
//             // onChange={onChangeRegisterForm}
//             placeholder='E-mail'
//             size='large'
//           />
//         </Form.Item>

//         <Form.Item
//           name='password'
//           rules={[
//             {
//               required: true,
//               message: 'Vui lòng nhập thông tin password',
//             },
//           ]}
//           hasFeedback
//         >
//           <Input.Password
//             name='password'
//             value={userInfor.password}
//             // onChange={onChangeRegisterForm}
//             placeholder='Mật khẩu'
//             size='large'
//           />
//         </Form.Item>

//         <Form.Item
//           name='confirm'
//           dependencies={['password']}
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: 'Vui lòng nhập thông tin password!',
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }

//                 return Promise.reject(new Error('Mật khẩu không khớp!'));
//               },
//             }),
//           ]}
//         >
//           <Input.Password
//             name='confirm_password'
//             value={userInfor.confirm_password}
//             // onChange={onChangeRegisterForm}
//             placeholder='Xác minh mật khẩu'
//             size='large'
//           />
//         </Form.Item>
//         <Form.Item
//           name='address'
//           rules={[
//             {
//               type: 'array',
//               required: true,
//               message: 'vui lòng nhập thông tin!',
//             },
//           ]}
//         >
//           <Cascader
//             onChange={onChangeAdress}
//             name='address'
//             options={address}
//             placeholder='Địa chỉ'
//             size='large'
//           />
//         </Form.Item>

//         <Form.Item
//           name='phone'
//           rules={[
//             {
//               required: true,
//               message: 'Vui lòng nhập thông tin!',
//             },

//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || patern.test(getFieldValue('phone'))) {
//                   return Promise.resolve();
//                 }

//                 return Promise.reject(new Error('Vui lòng nhập đúng sđt!'));
//               },
//             }),
//           ]}
//         >
//           <Input
//             name='phone_number'
//             value={userInfor.phone_number}
//             // onChange={onChangeRegisterForm}
//             addonBefore={prefixSelector}
//             placeholder='Số điện thoại'
//             size='large'
//           />
//         </Form.Item>
//         <Form.Item
//           name='gender'
//           rules={[
//             {
//               required: true,
//               message: 'Vui lòng chọn thông tin!',
//             },
//           ]}
//         >
//           <Select
//             onChange={onChangeSelect}
//             name='gender'
//             placeholder='Chọn thông tin giới tính'
//             size='large'
//           >
//             <Option value='male'>Nam</Option>
//             <Option value='female'>Nữ</Option>
//             <Option value='other'>Khác</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           name='agreement'
//           valuePropName='checked'
//           rules={[
//             {
//               validator: (_, value) =>
//                 value
//                   ? Promise.resolve()
//                   : Promise.reject(new Error('Vui lòng chọn đồng ý!')),
//             },
//           ]}
//           {...tailFormItemLayout}
//         >
//           <Checkbox onChange={onChangeTerm}>
//             Tôi đồng ý với các <Link to='/'>điều khoản</Link>
//           </Checkbox>
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           <Button
//             onClick={onSubmitForm}
//             type='primary'
//             htmlType='submit'
//             block
//             size='large'
//           >
//             Đăng ký
//           </Button>
//         </Form.Item>
//         <Form.Item className='askLogin'>
//           <span>Đã có tài khoản?</span>
//           <Link to='/login'> Đăng nhập</Link>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default RegisterForm;
import React, { useState } from 'react';
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
  message,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const openMessage = (text) => {
  message.error(text, 2);
};

const openMessageSuccess = (text) => {
  message.success(text, 2);
};

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
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (localStorage.getItem('infor') === null) {
      localStorage.setItem('infor', JSON.stringify([values]));
    } else {
      const getArr = JSON.parse(localStorage.getItem('infor'));
      //console.log('Received values of form: ', values);
      openMessageSuccess('Register successfully!');
      localStorage.setItem('infor', JSON.stringify([...getArr, values]));
      //localStorage.setItem('infor', JSON.stringify(values));
      navigate('/login');
    }
  };
  const onFinishFailed = () => {
    openMessage('Vui lòng điền đầy đủ thông tin');
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
        >
          <Input placeholder='Tên Đăng nhập' size='large' />
        </Form.Item>
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
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
