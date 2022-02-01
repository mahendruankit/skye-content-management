import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    console.log('location', location.pathname);
    switch (location.pathname) {
      case '/about':
        scrollSmoothHandler(refs.aboutRef);
        break;
      case '/contact':
        scrollSmoothHandler(refs.contactRef);
        break;
      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <NavLink to='/about' activeClassName='selected'>
        About
      </NavLink>
      <NavLink to='/contact' activeClassName='selected'>
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
