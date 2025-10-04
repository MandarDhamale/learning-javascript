import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar, Container, Button} from 'react-bootstrap';

function AppNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>My Albums</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default AppNavbar;