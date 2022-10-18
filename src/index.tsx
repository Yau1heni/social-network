import React from 'react';
import './index.css';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'))
}

rerenderTree(state)

subscribe(rerenderTree)


