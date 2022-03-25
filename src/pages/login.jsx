import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text } = Typography;
export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="my-container">
      <div className="banner">
        <div className="inner-banner">
          <Col xs={24}>
            <Form
              size="normal"
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>
                    <span className="text-banner">Remember me</span>
                  </Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  <span className="text-banner">Forgot password</span>
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="register-form-button"
                >
                  <Link to="/register">Register</Link>
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </div>
    </div>
  );
}
