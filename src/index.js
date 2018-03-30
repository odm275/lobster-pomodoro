import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import  {BrowserRouter as Router } from 'react-router-dom';
const WrappedApp = () => (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
registerServiceWorker();
