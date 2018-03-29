import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import Theme from './common/Theme'
// const ThemeProvider = styled.ThemeProvider;
// const styled = styled.default;
// const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
// console.log(theme)
ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
