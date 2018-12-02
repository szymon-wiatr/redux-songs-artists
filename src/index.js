import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './artists/reducers';
import localStorageService from './apis/localStorage';
import App from './App';
import './index.css';

const initialState = localStorageService.get('artists') ? {artists: localStorageService.get('artists')} : undefined;

const store = createStore(
    rootReducer,
    initialState,
    // Please install Redux DevTools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

serviceWorker.unregister();
