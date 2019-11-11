import * as serviceWorker from './serviceWorker';
import store from './components/Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";



    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,document.getElementById('root'));


//rerenderEntireTree(store.getState());
//
//store.subscribe(() => {
//    let state = store.getState();
//    rerenderEntireTree(state);
//});

serviceWorker.unregister();
