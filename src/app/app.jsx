import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { history } from '../helpers';
import { Home, Same } from '../Pages';
import Login from '../pages/login';
import Register from '../pages/register';
import UserPage from '../pages/user-page';
import './app.css';

function App() {
  return (
    <div className='page'>
      <div className='container'>
        <BrowserRouter history={history}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/same' element={<Same />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/userpage' element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export { App };
