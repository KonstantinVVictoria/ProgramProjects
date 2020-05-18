import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/boostrap.css';
import Counter from './components/counter';

ReactDOM.render(<Counter />, document.getElementById('root'))
registerServiceWorker();