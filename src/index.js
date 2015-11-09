require('./main.css');
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

var appNode = document.createElement('div');
appNode.className = 'react-webpack-starter-app';
document.body.appendChild(appNode);

render(<App name="React Webpack Starter" />, appNode);
