import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './reducers/index';

const Store = createStore(myReducer);

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
