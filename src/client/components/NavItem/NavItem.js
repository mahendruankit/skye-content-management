import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ NavItems }) {
  return (
    <>
      {NavItems.map((item) => {
        return (
          <div className='menuItem' key={item.id}>
            <li>
              <NavLink
                exact={true}
                to={item.tolink}
                activeClassName='menuItem--active'
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
