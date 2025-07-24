import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';

function App() {
    const [activeChat, setActiveChat] = useState(null);

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar setActiveChat={setActiveChat} />
                <Chat activeChat={activeChat} />
            </div>
        </div>
    );
}

export default App;