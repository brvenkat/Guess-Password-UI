// Import to get Fetch working in IE
import 'whatwg-fetch'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { App } from './pages/App';

ReactDOM.render (
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);