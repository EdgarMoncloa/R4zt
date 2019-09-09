import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Start from './pages/start';
import Portfolio from './pages/portfolio';

const container = document.getElementById('app');
ReactDOM.render(<Portfolio />, container);
