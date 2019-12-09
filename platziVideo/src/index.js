import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';

const app = document.getElementById('App');

// ReactDom.render(que voy a renderear, donde lo voy a renderear)
ReactDom.render(<HelloWorld />, app);