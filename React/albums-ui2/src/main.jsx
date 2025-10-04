import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import './index.css';
import ProtectedRoute from './ProtectedRoute.jsx';
import Layout from './Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />

        {/* This is the new Layout Route */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          {/* You can add more protected pages here later, like /profile */}
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);