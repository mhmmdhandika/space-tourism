import { Home, Destination, Crew, Technology, NotFound } from '../pages/';

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
    name: 'Technology',
    url: '/technology',
    element: <Technology />,
  },
  {
    name: 'Not Found',
    url: '*',
    element: <NotFound />,
  },
];

export default pages;
