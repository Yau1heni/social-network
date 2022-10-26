import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StorePropsType} from "./redux/State";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props: StorePropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}>
                </Route>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}>
                </Route>
                <Route path='/news' render={() => <News/>}></Route>
                <Route path='/music' render={() => <Music/>}></Route>
                <Route path='/settings' render={() => <Settings/>}></Route>
            </div>
        </div>
    );
}

export default App;
