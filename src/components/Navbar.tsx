import { Link } from 'react-router-dom';
import pages from '../data/pages';

function Navbar() {
  return (
    <nav>
      <ul>
        {pages
          .filter(item => item.url !== '*')
          .map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Navbar;
