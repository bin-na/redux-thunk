import React from "react";
import { Row, Col } from "antd";

const UserItem = (props) => {
  return (
    <>
      <Col className="user-infor">
        <p className="p-infor">Email: </p>
        <p className="p-infor">Gender: </p>
        <p className="p-infor">Address: </p>
        <p className="p-infor">Username: </p>
        <p className="p-infor">Full name: </p>
        <p className="p-infor">Phone number: </p>
      </Col>
      <Col style={{ marginLeft: "10%" }} />
      <Col className="user-infor">
        <p className="p-infor2">{props.email} </p>
        <p className="p-infor2">{props.gender} </p>
        <p className="p-infor2">{props.address} </p>
        <p className="p-infor2">{props.username} </p>
        <p className="p-infor2">{props.full_name} </p>
        <p className="p-infor2">{props.phone_number} </p>
      </Col>
    </>
  );
};

export default UserItem;
