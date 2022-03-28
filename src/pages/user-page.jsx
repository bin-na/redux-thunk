import React from "react";
import { useSelector } from "react-redux";
import "./user-page.css";
import { Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
const UserPage = () => {
  const infor = useSelector((state) => state.ahuhu);
  console.log(infor);
  return (
    <div className="userWrapper">
      <div className="banner-infor">
        <div className="infor">
          <Avatar className="avatar" size={64} icon={<UserOutlined />} />

          <div className="user">
            <Row>
              <p className="title">Personal Information</p>
              <Col className="user-infor">
                <p className="p-infor">Email: </p>
                <p className="p-infor">Gender: </p>
                <p className="p-infor">Adress: </p>
                <p className="p-infor">Username: </p>
                <p className="p-infor">Full name: </p>
                <p className="p-infor">Phone number: </p>
              </Col>
              <Col style={{ marginLeft: "10%" }} />
              <Col className="user-infor">
                <p className="p-infor2">{infor.email}a </p>
                <p className="p-infor2">{infor.gender} c</p>
                <p className="p-infor2">{infor.address}c </p>
                <p className="p-infor2">{infor.username} c</p>
                <p className="p-infor2">{infor.full_name}c </p>
                <p className="p-infor2">{infor.phone_number} c</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
