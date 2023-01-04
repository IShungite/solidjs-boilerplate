import { Outlet } from '@solidjs/router';
import Header from 'src/';

const Root = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Root;
