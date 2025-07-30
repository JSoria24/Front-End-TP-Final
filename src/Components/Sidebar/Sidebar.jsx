import Search from '../Search/Search';
import HorizontalNav from '../Navigation/HorizontalNav';
import ChatList from '../ChatList/ChatList';
import React, { useState } from 'react';
import { FaPlus, FaEllipsisV } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="sidebar">
            <div className="whatsapp-header">
                <span className="whatsapp-title">The Boy's</span>
                
                <div className="header-icons">
                    <button className="header-btn">
                        <FaPlus className="header-icon" />
                    </button>
                    <div className="menu-wrapper">
                        <button 
                            className="header-btn"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <FaEllipsisV className="header-icon" />
                        </button>
                        
                        {showMenu && (
                            <div className="dropdown-menu">
                                <button className="menu-item">Nuevo grupo</button>
                                <button className="menu-item">Nueva comunidad</button>
                                <button className="menu-item">Mensajes destacados</button>
                                <button className="menu-item">Ajustes</button>
                                <button className="menu-item">Cerrar sesión</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Search />
            <HorizontalNav />
            <ChatList />
        </div>
    );
};

export default Sidebar;