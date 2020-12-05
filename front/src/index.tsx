//---- Packages
import React from 'react';
import ReactDOM from 'react-dom';

//---- Screens
import Routes from './routes';

//---- CSS
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
