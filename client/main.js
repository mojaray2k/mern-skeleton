import React from 'react';
import ReactDOM, {hydrate} from 'react-dom';
import App from './App';

const renderMethod = module.hot ? ReactDOM.render : hydrate;
renderMethod(<App />, document.getElementById('root'));
