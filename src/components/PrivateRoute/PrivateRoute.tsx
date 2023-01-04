import { Navigate, Outlet } from '@solidjs/router';
import { Show } from 'solid-js';

const PrivateRoute = () => {
  const isAuthenticated = false;

  return (
    <Show
      when={isAuthenticated}
      children={<Outlet />}
      fallback={<Navigate href={'/login'} />}
    />
  );
};

export default PrivateRoute;
