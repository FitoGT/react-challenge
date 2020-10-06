import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './layouts/Login';
import './vibe/scss/styles.scss';
import {useSelector} from 'react-redux'

export default function App() {
  let isLoged = useSelector(state=>state.login)
  return (
    <BrowserRouter>
      {isLoged ?         
          <Route component={DashboardLayout} />        
        : 
      <Login />
      }
    </BrowserRouter>
    
  );
}
