import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Pet from "./Pet";

ReactDOM.render(<Pet />, document.getElementById('root'));
registerServiceWorker();
