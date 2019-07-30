import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App/App'

const AppBuilder = () => (
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

export default AppBuilder