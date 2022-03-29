import React from 'react';
import { useSelector } from 'react-redux';
import './user-page.css';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import UserItem from '../components/register/user-item';

const UserPage = () => {
  const infor = useSelector((state) => state.ahuhu);

  return (
    <div className='userWrapper'>
      <div className='banner-infor'>
        <div className='infor'>
          <div className='user'>
            <Row>
              {infor.data.map((item, index) => {
                if (
                  item.username === JSON.parse(localStorage.getItem('username'))
                ) {
                  return <UserItem key={index} info={item} />;
                }
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
