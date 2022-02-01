import React, { useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import stringResource from './resources/strings';
import CookieConsent from 'react-cookie-consent';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div ref={homeRef} className='app'>
      <HashRouter>
        <Header refs={{ aboutRef, contactRef, homeRef }} />
        <div className='logo__container'>
          <div className='logo'></div>
        </div>
        <h1>Introduction</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor
          arcu vel enim maximus porttitor. Etiam feugiat interdum cursus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Integer non egestas velit. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Ut tincidunt dolor ac erat fringilla rhoncus. Praesent congue
          blandit felis, at blandit nisi iaculis vitae. Suspendisse potenti.
          Aliquam sagittis turpis pretium, lobortis tortor sed, consectetur
          urna. Cras ligula mi, maximus sed scelerisque eget, pellentesque vitae
          neque. Donec viverra varius sem.{' '}
        </p>
        <p>
          Duis efficitur magna sit amet orci scelerisque ultricies. Sed molestie
          tellus est, auctor commodo mi porta eu. Duis sit amet ex sed nibh
          porttitor aliquam sit amet vel ipsum. Cras augue lacus, bibendum vitae
          justo vel, luctus venenatis est. Vestibulum ac euismod sem. Curabitur
          posuere hendrerit dictum. Aliquam velit turpis, semper eget purus in,
          dignissim tristique magna. Maecenas eget condimentum tortor. In
          porttitor quis enim id eleifend. Cras laoreet convallis sollicitudin.
          Duis eget libero quis ante cursus tempus nec sit amet nisi. Proin
          aliquet ut elit vitae ultrices. Ut luctus consequat lectus.
          Suspendisse suscipit turpis eros, malesuada rhoncus dui viverra non.
          Duis sollicitudin elit a posuere mattis.
        </p>
        <p>
          Maecenas mattis euismod congue. Etiam nec eros et nibh ultricies
          finibus. Integer porttitor pellentesque neque ut blandit. Donec et
          condimentum orci. Morbi mi sem, tincidunt sit amet blandit elementum,
          auctor eget nulla. Sed egestas dolor et eros interdum, a facilisis
          quam lacinia. Suspendisse tempor lorem sed tincidunt feugiat. Maecenas
          aliquam velit sit amet velit consectetur, eget egestas lacus
          malesuada. Pellentesque ac condimentum enim, a vulputate neque. Sed et
          ipsum vel velit efficitur pretium. Aliquam placerat nibh sit amet
          tempor porttitor.
        </p>
        <p>
          Duis gravida, orci vel luctus auctor, augue lectus sollicitudin orci,
          sed tincidunt quam augue id urna. Cras tristique convallis maximus.
          Duis interdum urna at ornare varius. Praesent lacinia odio luctus
          ligula scelerisque hendrerit.
        </p>

        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </HashRouter>
      <Footer />
      <CookieConsent
        location='bottom'
        buttonText={stringResource.portfolio.gdprbutton}
        cookieName='gdprCookie'
        style={{
          background: '#ffe5b4',
          fontSize: '1em',
          color: 'rgba(0, 0, 0, 0.87)',
        }}
        buttonStyle={{
          color: '#f7f7f7',
          fontSize: '1em',
          background: 'rgba(0, 0, 0, 0.87)',
          padding: '0px 5px 0px 5px',
        }}
        expires={150}
      >
        {stringResource.portfolio.gdpr}
      </CookieConsent>
    </div>
  );
}

export default App;
