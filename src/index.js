import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import Root from './components/Root';
import App from './App'
import Test from './Test'
import { API_WS_ROOT } from './constants';



ReactDOM.render(
    
  <ActionCableProvider url={`${API_WS_ROOT}?token=${localStorage.getItem("jwt")}`}>
    {/* <App />, */}
    <Root />
    {/* <Test /> */}
  </ActionCableProvider>,
  document.getElementById('root')
);


