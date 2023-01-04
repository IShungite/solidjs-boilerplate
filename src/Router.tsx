import { Router as MyRouter, useRoutes } from '@solidjs/router';
import routesDefinition from './Routes';

const Router = () => {
  const Routes = useRoutes(routesDefinition);
  return (
    <MyRouter>
      <Routes />
    </MyRouter>
  );
};

export default Router;
