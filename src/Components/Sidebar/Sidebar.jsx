import React from 'react';
import './Sidebar.css';
import ChatList from '../ChatList/ChatList';
import Search from '../Search/Search';

const Sidebar = ({ setActiveChat }) => {
    return (
        <div className="sidebar">
            <Search />
            <ChatList setActiveChat={setActiveChat} />
        </div>
    );
};

export default Sidebar;