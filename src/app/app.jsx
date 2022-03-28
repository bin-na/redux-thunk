import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { history } from '../helpers';
import { Home, Same } from '../Pages';
import Login from '../pages/login';
import Register from '../pages/register';
import UserPage from '../pages/user-page';
import './app.css';
import { useDispatch } from 'react-redux';
// import { saveInfor } from '../reducers/inforSlice';
import { ahuhuActions } from '../actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // if (localStorage.getItem("infor")) {
    //   const userInfor = JSON.parse(localStorage.getItem("infor"));
    //   dispatch(saveInfor(userInfor));
    // }
    dispatch(ahuhuActions.requestData());
  }, []);
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/same' element={<Same />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/infor' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export { App };
