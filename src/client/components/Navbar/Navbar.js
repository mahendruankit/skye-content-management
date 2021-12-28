import React from 'react';
import { withRouter } from 'react-router';
import NavItem from '../NavItem/NavItem';
import NavItems from '../../../NavbarList';
import './Navbar.scss';

function Navbar({ ...props }) {
  const { to, staticContext, ...rest } = props;
  return (
    <div {...rest}>
      <ul>
        <NavItem NavItems={NavItems}></NavItem>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);
