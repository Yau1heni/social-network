import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {AppPropsType} from "./redux/State";

const App = (props: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state}/>}>
                    </Route>
                    <Route path='/profile'
                           render={() => <Profile state={props.state}
                                                  addPostCallback={props.addPostCallback}
                                                  updateNewPostText={props.updateNewPostText}/>}>
                    </Route>
                    <Route path='/news' render={() => <News/>}></Route>
                    <Route path='/music' render={() => <Music/>}></Route>
                    <Route path='/settings' render={() => <Settings/>}></Route>
                </div>
            </div>
    );
}

export default App;
