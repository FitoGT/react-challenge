import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Route component={DashboardLayout} />
    </BrowserRouter>
  );
}
