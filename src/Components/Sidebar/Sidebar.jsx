import React from 'react';
import Search from '../Search/Search';
import HorizontalNav from '../Navigation/HorizontalNav';
import ChatList from '../ChatList/ChatList';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Search />
            <HorizontalNav />
            <ChatList />
        </div>
    );
};

export default Sidebar;