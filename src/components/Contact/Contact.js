import React, { forwardRef } from 'react';
import stringResource from '../../resources/strings';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import Textarea from '../Common/Textarea/Textarea';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';

const Contact = forwardRef((props, ref) => {
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
    <section className='contactSection' ref={ref}>
      <h2 className='contactSection__title'>Contact Me</h2>
      <div className='contactSection__avatarContainer'>
        <div className='contactSection__avatar'></div>
      </div>
      <div className='contactSection__phone'>
        <FaPhone /> &nbsp;
        <a href={`tel: ${stringResource.portfolio.contact.phone}`}>
          {stringResource.portfolio.contact.phone}
        </a>
      </div>
      <div className='contactSection__email'>
        <FaEnvelope /> &nbsp;
        <a href={`mailto: ${stringResource.portfolio.contact.email}`}>
          {stringResource.portfolio.contact.email}
        </a>
      </div>
      <form onSubmit={sendEmail} className='contactMe__form'>
        <div id='Name'>
          <Input
            size='large'
            type='hidden'
            name='from_name'
            value='Ankit Mahendru Contact Me'
          />
          <Input
            size='large'
            placeholder='Name'
            type='text'
            name='to_name'
            required
          />
        </div>

        <div id='Email'>
          <Input
            size='large'
            placeholder='Email Address'
            type='email'
            name='user_email'
            required
          />
        </div>
        <div id='Message'>
          <Textarea
            size='large'
            placeholder='Write a message'
            as='textarea'
            name='message'
            rows='10'
            cols='100'
          />
        </div>
        <div id='Send'>
          <Button
            label='Send'
            size='medium'
            style={{ marginBottom: '1em' }}
            type='submit'
            primary={true}
          ></Button>
        </div>
      </form>
    </section>
  );
});

export default Contact;
