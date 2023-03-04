import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/common/Preloader/Preloader';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {initializeApp} from './redux/app-reducer';
import store from './redux/redux-store';

const DialogsContainer = lazy(() => import ('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import ('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer'));

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>;

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}>
                        </Route>
                        <Route path="/profile/:userID?"
                               render={() => <ProfileContainer/>}>
                        </Route>
                        <Route path="/users"
                               render={() => <UsersContainer/>}>
                        </Route>
                        <Route path="/login" render={() => <Login/>}></Route>
                        <Route path="/news" render={() => <News/>}></Route>
                        <Route path="/music" render={() => <Music/>}></Route>
                        <Route path="/settings" render={() => <Settings/>}></Route>
                    </Suspense>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state: any): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    };
};
let AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

export const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
};


