import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import Root from './components/Root';

import { API_WS_ROOT } from './constants';

ReactDOM.render(
    
  <ActionCableProvider url={API_WS_ROOT}>
    <Root />
  </ActionCableProvider>,
  document.getElementById('root')
);


