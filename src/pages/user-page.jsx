import React from 'react';
import './user-page.css';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const UserPage = () => {
  return (
    <div className='userWrapper'>
      <div className='colorSession'></div>
      <div className='noColorSesson'></div>
      <div className='userSession'>
        <Row>
          <Col lg={8} md={24}>
            <div className='imgBox'>
              <div className='userImg'>
                <Avatar shape='square' icon={<UserOutlined />} />
              </div>
            </div>
          </Col>
          <Col lg={16} md={24} style={{ padding: '20px' }}>
            <div className='userInfo'>
              <h2 className='name'>Nguyễn Văn A</h2>
              <p className='description'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                nihil magnam sint ut, animi repudiandae quia explicabo quisquam
                libero, deleniti ducimus error tempora? Distinctio iste esse
                vitae ratione beatae magnam!
              </p>
              <p className='email'>abc@gmail.com</p>
              <p className='address'>Quận 1, thành phố Hồ Chí Minh</p>
              <p className='phone'>0342476474</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserPage;
