import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './main.css';
import App from './components/App';
import { router } from './router';


ReactDOM.render(router(), document.getElementById('app'));
