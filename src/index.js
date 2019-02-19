import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App/App';
import * as serviceWorker from './components/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
