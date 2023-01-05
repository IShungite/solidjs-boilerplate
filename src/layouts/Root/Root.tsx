import { Outlet } from '@solidjs/router';
import Header from 'src/components/Header/Header';

const Root = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Root;
