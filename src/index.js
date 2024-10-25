import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import storea  from './store/index.js';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={storea}> <App /> </Provider>  );
