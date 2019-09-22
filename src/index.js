import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

//Component
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getAllProducts } from './actions';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

class Root extends React.Component {
   render() {
       store.dispatch(getAllProducts());
       return(
            <Provider store={store}>
               <BrowserRouter>
                  <Switch>
                     <Route path="/" component={App} />
                  </Switch>
               </BrowserRouter>
            </Provider>
         );
      }
  }

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();