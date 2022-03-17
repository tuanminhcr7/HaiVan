import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './view/Login/Login';
import Home from './view/Home/Home';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
