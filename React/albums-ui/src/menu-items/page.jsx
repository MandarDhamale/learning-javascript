// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const isLoggedIn = !!localStorage.getItem('token');

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: isLoggedIn ? '' : '/login',  
      icon: icons.LoginOutlined,
      target: !isLoggedIn,               
      disabled: isLoggedIn               
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: isLoggedIn ? '' : '/register',
      icon: icons.ProfileOutlined,
      target: !isLoggedIn,
      disabled: isLoggedIn
    }
  ]
};

export default pages;
