import Home from './client/contents/Home/Home';
import About from './client/contents/About/About';
import ContactMe from './client/components/ContactMe/ContactMe';

const pageRouteList = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    Component: Home,
  },
  {
    path: '/about',
    name: 'About',
    Component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    Component: ContactMe,
  },
];

export default pageRouteList;
