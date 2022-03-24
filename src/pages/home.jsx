import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { ahuhuActions } from '../actions';
import { Button } from 'antd';
const Home = () => {
  const data = useSelector((state) => state.ahuhu);
  const dispatch = useDispatch();
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const handleAlert = () => {
    dispatch(ahuhuActions.alert("I'm a trash dev"));
  };

  React.useEffect(() => {
    if (data && data.text) {
      alert(data.text);
    }
  }, [data]);

  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>
            <Link to='/login'>Đăng nhập</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            {' '}
            <Link to='/register'>Đăng ký</Link>
          </Menu.Item>
          {/* <Menu.Item key='3'>nav 3</Menu.Item> */}
        </Menu>
      </Header>
    </Layout>
  );
};

export { Home };
