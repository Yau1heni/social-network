import React from 'react';
import './index.css';
import store from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'))
}

rerenderTree()
store.subscribe(rerenderTree)
