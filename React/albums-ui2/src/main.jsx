import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import './index.css';
import ProtectedRoute from './ProtectedRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path='/' element ={
          <ProtectedRoute>
              <Dashboard />
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);