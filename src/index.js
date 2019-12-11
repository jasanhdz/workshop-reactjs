import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './routes/App';
import initialState from './initialState';
import reducer from './reducers/index';

const app = document.getElementById('App');
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// ReactDom.render(que voy a renderear, donde lo voy a renderear)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app);