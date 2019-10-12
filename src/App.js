import React, { Component, Fragment } from 'react';
import { HashRputer, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import HomePage from './component/home/home';

import { IntlProvider } from 'react-intl';
import ComingSoon from './component/Pages/ComingSoon';

import './App.css';
import './Vendor.js';


class App extends Component {

  getUrl(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/ComingSoon'  ? true : `/${pathArray[1]}` === '/Maintenance' ? true :`/${pathArray[1]}` === '/admin-panel'  ? true : false;
  }

  render() {
    const { location } = this.props;
    console.log(this.props);
    return (
      <IntlProvider locale="en" messages="s">
        <Fragment>
        <ToastContainer autoClose={1000} />
          {
            this.getUrl(location.pathname) ?
              <Switch>
                <Route path="/ComingSoon" component={ComingSoon} />
              </Switch>
              :
              <div>
                <Header />
                 <Switch>
                  <Route exact path="/" component={HomePage} />
                </Switch> 
                <Footer />
              </div>
          }

        </Fragment>
    </IntlProvider>
    )

  }


};
export default App;
