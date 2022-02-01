import React, { forwardRef } from 'react';
import imageResource from '../../resources/images';
import './About.scss';

const About = forwardRef((props, ref) => {
  return (
    <section className='aboutSection' ref={ref}>
      <div className='aboutSection__container'>
        <div className='aboutSection__avatar'>
          <img
            src={imageResource.portfolio.contactMe.avatar}
            alt='Graduation'
            className='aboutSection__avatar__image'
          ></img>
        </div>
        <div className='aboutSection__introduction'>
          <div className='spacer'></div>
          <h2> About Me</h2>
          <div className='spacer-large'></div>
          <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            luctus nulla. Etiam pretium a nunc sit amet dapibus. Nunc tempus
            pulvinar semper. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Curabitur orci risus,
            maximus sit amet dictum sed, luctus vel turpis. Nulla a placerat
            lacus. Vestibulum facilisis, tortor vel lacinia consequat, turpis
            orci elementum justo, eget tincidunt metus velit sit amet libero. Ut
            volutpat ipsum dolor, non egestas nulla volutpat id. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
          <p>
            Donec at rhoncus orci, eget ullamcorper risus. Nam ac ex arcu.
            Aliquam non bibendum sem, dictum molestie nunc. Nunc congue urna sit
            amet pharetra eleifend. Nam feugiat pulvinar sem, eu luctus lacus
            viverra blandit. Vestibulum lacinia tempor enim vitae iaculis.
            Maecenas non vulputate velit. Phasellus accumsan et sem in mollis.
            Ut dictum sed libero in blandit. Curabitur egestas nisi id odio
            maximus aliquam. Sed blandit, leo eu gravida mattis, metus lectus
            varius nunc, et tempor urna risus et quam.
          </p>
          <p>Best wishes,</p>
          <p>
            <strong>Nishi Sharma</strong>
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
