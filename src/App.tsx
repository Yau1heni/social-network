import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <a href='#'>Home</a>
            <a href='#'>News</a>
            <a href='#'>Messages</a>
        </div>
    )
}

export default App;
