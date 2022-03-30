import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserItem = (props) => {
  return (
    <>
      <Col className='user-img'>
        <Avatar className='avatar' shape='square' icon={<UserOutlined />} />
        {/* <p className='p-infor'>Email: </p>
        <p className='p-infor'>Gender: </p>
        <p className='p-infor'>Address: </p>
        <p className='p-infor'>Username: </p>
        <p className='p-infor'>Full name: </p>
        <p className='p-infor'>Phone number: </p>  */}
      </Col>
      <Col className='user-infor'>
        <h3>{props.info.name} </h3>
        <div className='p-infor2'>
          <svg className='text-maincolor' width={15} height={15}>
            <use href={`/img/icons.svg#email`} />
          </svg>
          {props.info.email}
        </div>
        <div className='p-infor2'>
          <svg className='text-maincolor' width={15} height={15}>
            <use href={`/img/icons.svg#gender`} />
          </svg>
          {props.info.gender}
        </div>
        <div className='p-infor2'>
          <svg className='text-maincolor' width={15} height={15}>
            <use href={`/img/icons.svg#address`} />
          </svg>
          {props.info.address.join(', ')}
        </div>
        <div className='p-infor2'>
          <svg className='text-maincolor' width={15} height={15}>
            <use href={`/img/icons.svg#user`} />
          </svg>
          {props.info.username}
        </div>
        <div className='p-infor2'>
          <svg className='text-maincolor' width={15} height={15}>
            <use href={`/img/icons.svg#phone`} />
          </svg>
          {props.info.phone}
        </div>
      </Col>
    </>
  );
};

export default UserItem;
