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

  return <div className=''></div>;
};

export { Home };
