import React, { useState } from "react";
import ReactDOM from "react-dom";
import RegisterForm from "../components/register/register-form";
import ImgBox from "../components/register/img-box";
import "./register.css";
import { Row, Col } from "antd";

const Register = () => {
  return (
    <div className="page">
      <div className="container">
        <Row className="wrapper">
          <Col xs={24} sm={24} md={12} lg={8} className="registerForm">
            <RegisterForm />
          </Col>
          <Col xs={0} sm={0} md={12} lg={16} className="imgBox">
            <ImgBox />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Register;
