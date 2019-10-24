import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './index.css';

function startRender() {
    ReactDOM.render(<App />,document.getElementById('root'));
}

window.onload = function() {
    startRender();
};