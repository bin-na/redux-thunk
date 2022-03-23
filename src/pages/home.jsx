import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ahuhuActions } from '../actions';
import { Button } from 'antd';
const Home = () => {
  const data = useSelector((state) => state.ahuhu);
  const dispatch = useDispatch();

  const handleAlert = () => {
    dispatch(ahuhuActions.alert("I'm a trash dev"));
  };

  React.useEffect(() => {
    if (data && data.text) {
      alert(data.text);
    }
  }, [data]);

  return (
    <>
      <div className='col-lg-8 offset-lg-2'>
        <h1>Hi!</h1>
        <button onClick={handleAlert}>hello Ahuhu</button>
      </div>
      <div className='App'>
        <Button type='primary'>Button</Button>
      </div>
    </>
  );
};

export { Home };
