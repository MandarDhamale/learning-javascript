import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - sample page
const AlbumsPage = Loadable(lazy(() => import('pages/albums/albums')));
const About = Loadable(lazy(() => import('pages/static/about')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <AlbumsPage />
    },
    {
      path: '/about',
      element: <About />
    },
      ]
};

export default MainRoutes;
