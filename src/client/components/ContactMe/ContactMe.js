import React from 'react';
import emailjs from 'emailjs-com';
import stringResource from '../../resources/strings';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactMe.scss';

toast.configure();
export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0icly2h',
        'template_991icco',
        e.target,
        'user_xj6G9jxg4xXCDRjgwxSr4'
      )
      .then(
        (result) => {
          toast('Message sent.', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className='contact contactSection'>
      <div className='contact__card'>
        <h2 className='contact__card__title'>Contact Me</h2>
        <div className='contact__card__avatarContainer'>
          <div className='contact__card__avatar'></div>
        </div>
        <div className='contact__card__phone'>
          <FaPhone /> &nbsp;
          <a href={`tel: ${stringResource.portfolio.contact.phone}`}>
            {stringResource.portfolio.contact.phone}
          </a>
        </div>
        <div className='contact__card__email'>
          <FaEnvelope /> &nbsp;
          <a href={`mailto: ${stringResource.portfolio.contact.email}`}>
            {stringResource.portfolio.contact.email}
          </a>
        </div>
        <form className='contact__card__form' onSubmit={sendEmail}>
          <div id='Name'>
            <input
              type='hidden'
              name='from_name'
              value='Skye Content Management'
            />
            <input placeholder='Name' type='text' name='to_name' />
          </div>

          <div id='Email'>
            <input
              placeholder='Email Address'
              type='email'
              name='user_email'
              required
            />
          </div>
          <div id='Message'>
            <textarea
              placeholder='Write a message'
              as='textarea'
              name='message'
              rows='4'
              cols='100'
            />
          </div>
          <button style={{ marginBottom: '1em' }} type='submit'>
            Send{' '}
          </button>
        </form>
      </div>
    </div>
  );
}