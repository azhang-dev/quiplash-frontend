import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import App from './App'
import Test from './Test'
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import axios from 'axios'

let token = localStorage.getItem("jwt");
// console.log("CURRENT USER", token)
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

ReactDOM.render(
    
  <ActionCableProvider url={`${API_WS_ROOT}?token=${localStorage.getItem("jwt")}`}>
    {/* <App />, */}
    <Root />
    {/* <Test /> */}
  </ActionCableProvider>,
  document.getElementById('root')
);


