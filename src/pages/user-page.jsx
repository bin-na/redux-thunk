import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './user-page.css';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const UserPage = () => {
  const infor = useSelector((state) => state.ahuhu);

  return (
    <div className='userWrapper'>
      <div className='banner-infor'>
        <div className='infor'>
          <Avatar className='avatar' size={64} icon={<UserOutlined />} />

          <div className='user'>
            <Row>
              <p className='title'>Personal Information</p>
              <Col className='user-infor'>
                <p className='p-infor'>Email: </p>
                <p className='p-infor'>Gender: </p>
                <p className='p-infor'>Adress: </p>
                <p className='p-infor'>Username: </p>
                <p className='p-infor'>Full name: </p>
                <p className='p-infor'>Phone number: </p>
              </Col>
              <Col style={{ marginLeft: '50px' }} />
              <Col className='user-infor'>
                <p className='p-infor2'>{infor.data.email} </p>
                <p className='p-infor2'>Gender: </p>
                <p className='p-infor2'>Adress: </p>
                <p className='p-infor2'>Username: </p>
                <p className='p-infor2'>Full name: </p>
                <p className='p-infor2'>Phone number: </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
