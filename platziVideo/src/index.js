import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';

const app = document.getElementById('App');

// ReactDom.render(que voy a renderear, donde lo voy a renderear)
ReactDom.render(<App />, app);