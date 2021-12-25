import React from 'react';
import stringResource from '../../resources/strings';
import Social from '../Social/Social';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={process.env.PUBLIC_URL + '/logo512.png'} alt=''></img>
      </div>
      <ul className='footer__details'>
        <li className='footer__details__item'></li>
        <li className='footer__details__item'></li>
        <hr />
        <li className='footer__details__item'>
          &copy;{new Date().getFullYear()} | {stringResource.portfolio.username}{' '}
          | All rights reserved
        </li>
      </ul>
      <Social className='footer' />
    </div>
  );
};

export default Footer;
