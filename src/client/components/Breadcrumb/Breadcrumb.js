import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Breadcrumb.scss';

const Breadcrumb = ({ crumbs, handleMenu }) => {
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <div className='page__breadcrumb'>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <div className='page__breadcrumb__crumb' key={key}>
            <span className='page__breadcrumb__crumb__name'>{name}</span>
          </div>
        ) : path === '/' ? (
          <NavLink
            key={key}
            exact={true}
            onClick={handleMenu}
            to='/'
            className='page__breadcrumb__crumb'
          >
            <FontAwesomeIcon
              className='fa-sm'
              icon={faHome}
              style={{ marginRight: '0.5em' }}
            />
            <FontAwesomeIcon
              className='fa-sm'
              color='#e7e6dd'
              icon={faAngleRight}
              style={{ marginRight: '0.5em' }}
            />
          </NavLink>
        ) : (
          <NavLink key={key} to={path} className='page__breadcrumb__crumb'>
            <span className='page__breadcrumb__crumb__name'>{name}</span>
            <FontAwesomeIcon
              className='fa-sm'
              color='#e7e6dd'
              icon={faAngleRight}
              style={{ marginRight: '0.5em' }}
            />
          </NavLink>
        )
      )}
    </div>
  );
};

export default Breadcrumb;
