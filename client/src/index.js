import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider will keep track of the store at global state so we can access that store from anywhere
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css'; // for BackGround

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);