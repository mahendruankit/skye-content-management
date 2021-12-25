import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ NavItems, handleMenu }) {
  return (
    <>
      {NavItems.map((item) => {
        return (
          <div className='navItem' key={item.id}>
            <li>
              <NavLink
                exact={true}
                to={item.tolink}
                activeClassName='navItem--active'
                onClick={handleMenu}
              >
                {item.name}
              </NavLink>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default NavItem;
