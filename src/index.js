import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PreLoader from './components/PreLoader';

ReactDOM.render(
  <React.StrictMode>
    <PreLoader />
  </React.StrictMode>,
  document.getElementById('root')
);