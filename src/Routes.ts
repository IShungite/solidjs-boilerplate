import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

const routesDefinition: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./layouts/Root/Root')),
    children: [
      { path: '/', component: lazy(() => import('./pages/Home')) },
      {
        path: '/login',
        component: lazy(() => import('./pages/Login')),
      },
      {
        path: '/register',
        component: lazy(() => import('./pages/Register')),
      },
    ],
  },
  {
    path: '/',
    component: lazy(() => import('./layouts/PrivateRoute/PrivateRoute')),
    children: [
      { path: '/game', component: lazy(() => import('./pages/Game')) },
    ],
  },
];

export default routesDefinition;
