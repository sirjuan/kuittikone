import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from 'utils/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'react-select/dist/react-select.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
