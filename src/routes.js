import React from 'react';

const Sheep = React.lazy(() => import('./views/Base/Sheep/Sheep'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base', exact: true, name: 'Base', component: Sheep },
  { path: '/base/sheep', name: 'Sheep', component: Sheep },
];

export default routes;
