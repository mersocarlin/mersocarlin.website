import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
const createHashHistory = require('history/lib/createHashHistory');

import 'jquery';
import './styles/animate.css';
import './styles/app.scss';


const history = createHashHistory({
  queryKey: false,
});

render(
  <Root history={history} />,
  document.getElementById('main')
);
