// assets
import { LoginOutlined, ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  LogoutOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const isLoginEnabled = !!localStorage.getItem('token');

const caseLogin = [
  {
    id: 'logout1',
    title: 'Logout',
    type: 'item',
    url: '/logout',
    icon: icons.LogoutOutlined,
    target: true,
  }
];

const caseLogout = [
  {
    id: 'login',
    title: 'Login',
    type: 'item',
    url: '/login',
    icon: icons.LoginOutlined,
    target: true
  },
  {
    id: 'register',
    title: 'Register',
    type: 'item',
    url: '/register',
    icon: icons.ProfileOutlined,
    target: true
  }
];

const auth = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: isLoginEnabled ? caseLogin : caseLogout
};

export default auth;
