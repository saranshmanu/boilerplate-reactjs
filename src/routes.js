import Home from './views/Home';
import Settings from './views/Settings';
import NotFound from './views/404';
import Default from './layouts/Default';

const routes = [{
  path: '/',
  exact: true,
  component: Home,
  layout: Default,

}, {
  path: '/settings',
  component: Settings,
  layout: Default,

}, {
  path: '*',
  component: NotFound,
  layout: Default,

}];
export default routes;
