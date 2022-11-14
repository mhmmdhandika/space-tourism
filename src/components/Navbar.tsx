import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/shared/logo.svg';
import { ReactComponent as IconHamburger } from '../assets/images/shared/icon-hamburger.svg';
import { ReactComponent as IconClose } from '../assets/images/shared/icon-close.svg';
import pages from '../data/pages';

function Navbar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='fixed top-0 w-full font-barlow-condensed uppercase text-xl'>
      <div className='flex justify-between items-center h-full'>
        <div className='pl-12'>
          <Logo />
        </div>
        <button
          className={`${!isSidebarOpen && 'hidden'} pr-12`}
          onClick={handleSidebar}
        >
          <IconHamburger />
        </button>
        <ul
          className={`${
            isSidebarOpen && 'hidden'
          } absolute top-0 right-0 bg-opacity-80 backdrop-blur-[30px] h-default w-[65%] pr-10 flex flex-col gap-y-5 text-white sm:static sm:w-fit sm:flex-row sm:bg-none sm:backdrop-blur-none sm:justify-end sm:pr-10 sm:gap-x-10 sm:h-fit sm:bg-white/[0.09]`}
        >
          <button className='self-end mb-14 sm:hidden' onClick={handleSidebar}>
            <IconClose />
          </button>
          {pages.map((item, index) => {
            return (
              <li key={index} className={`${index === 0 && 'pl-10'} sm:py-9`}>
                <span className='font-bold mr-3 sm:hidden'>{`0${index}`}</span>
                <Link
                  to={item.url}
                  className={`sm:border-b-4 sm:pb-8 ${
                    location.pathname === item.url
                      ? 'sm:border-white'
                      : 'sm:border-transparent sm:hover:border-white/30'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
