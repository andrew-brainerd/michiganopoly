import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import appInfo from '../package.json';
import App from './components/App/App';
import './index.scss';

console.log(
  `%cMichiganopoly v${appInfo.version}`,
  'color: purple; font-size: 20px;'
);

console.log(appInfo);

WebFont.load({
  google: {
    families: [
      'Roboto Mono: 400'
    ]
  }
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
