import { Home, Destination, Crew, Tech } from '../pages';

const pages = [
  {
    name: 'Home',
    url: '/',
    element: <Home />,
  },
  {
    name: 'Destination',
    url: '/destination',
    element: <Destination />,
  },
  {
    name: 'Crew',
    url: '/crew',
    element: <Crew />,
  },
  {
    name: 'Tech',
    url: '/tech',
    element: <Tech />,
  },
];

export default pages;
