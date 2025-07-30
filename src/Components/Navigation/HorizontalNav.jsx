import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './HorizontalNav.css';

const HorizontalNav = () => {
    const location = useLocation();

    // Solo mostrar en la página de chats
    if (!location.pathname.startsWith('/chats')) {
        return null;
    }

    return (
        <div className="horizontal-nav">
            <NavLink to="/chats" end className="nav-tab" activeClassName="active">
                Todos
            </NavLink>
            <NavLink to="/chats/unread" className="nav-tab" activeClassName="active">
                No leídos
            </NavLink>
            <NavLink to="/chats/groups" className="nav-tab" activeClassName="active">
                Grupos
            </NavLink>
        </div>
    );
};

export default HorizontalNav;