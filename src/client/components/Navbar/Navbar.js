import React from 'react';
import { withRouter } from 'react-router';
import NavItem from './NavItem';
import NavItems from '../../../NavbarList';
import './Navbar.scss';

function Navbar({ handleMenu }) {
  return (
    <>
      <div className='page navbar items'>
        <ul>
          <NavItem NavItems={NavItems} handleMenu={handleMenu}></NavItem>
        </ul>
      </div>
    </>
  );
}

export default withRouter(Navbar);
