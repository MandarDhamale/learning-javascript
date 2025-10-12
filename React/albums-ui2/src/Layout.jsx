import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar'; // Make sure this name is correct

function Layout() {
  return (
    <div>
      <AppNavbar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;