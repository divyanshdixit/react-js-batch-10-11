import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// report web vitals => tool for measuring real-life performance  of application
// it measures a set of metrics that aim to capture the user experience of a web page
// This set is called web vitals and includes: First Contentful Paint. Largest Contentful Paint