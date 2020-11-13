import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {createStore , applyMiddleware, compose} from 'redux';
import RootReducer from './store/reducers'
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
let store =  createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

// let store = createStore(RootReducer, applyMiddleware(thunk));

const app = (
<Provider store = {store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>);

ReactDOM.render(app,document.getElementById('root'));
serviceWorker.unregister();
