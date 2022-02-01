import React from 'react';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import stringResource from '../../resources/strings';
import './Social.scss';

export default function Social({ className }) {
  return (
    <div className={`${className} social`}>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.instagram}
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.facebook}
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.twitter}
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.soundcloud}
          target='_blank'
          rel='noreferrer'
        >
          <FaSoundcloud />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.youtube}
          target='_blank'
          rel='noreferrer'
        >
          <FaYoutube />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.spotify}
          target='_blank'
          rel='noreferrer'
        >
          <FaSpotify />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.apple}
          target='_blank'
          rel='noreferrer'
        >
          <FaApple />
        </a>
      </div>
    </div>
  );
}
