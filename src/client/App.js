import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { HashRouter, Route } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import routes from '../PageRouteList';
import CookieConsent from 'react-cookie-consent';
import stringResource from './resources/strings';
import './App.scss';

function App() {
  const [isActive, setActive] = useState(true);

  const handleMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className='App'>
      <div className='page'>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <header className='page header'>
            <div className='page navbar'>
              <Navbar handleMenu={handleMenu} />
            </div>
          </header>

          {routes.map(({ path, Component }, key) => (
            <Route
              exact
              path={path}
              key={key}
              render={(props) => {
                const crumbs = routes
                  .filter(({ path }) => props.match.path.includes(path))
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              props.match.params[param]
                            ),
                          path
                        )
                      : path,
                    ...rest,
                  }));
                return (
                  <>
                    <Breadcrumb crumbs={crumbs} handleMenu={handleMenu} />
                    <Component {...props} />
                  </>
                );
              }}
            />
          ))}

          <Footer />
        </HashRouter>
        <CookieConsent
          location='bottom'
          buttonText={stringResource.portfolio.gdprbutton}
          cookieName='gdprCookie'
          style={{
            background: '#ffe5b4',
            fontSize: '1em',
            color: '#323232',
          }}
          buttonStyle={{
            color: '#323232',
            fontSize: '1em',
            background: 'lightblue',
            padding: '0px 5px 0px 5px',
          }}
          expires={150}
        >
          {stringResource.portfolio.gdpr}
        </CookieConsent>
      </div>
    </div>
  );
}

export default App;
