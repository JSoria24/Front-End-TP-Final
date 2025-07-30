import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaCircle,
    FaComments,
    FaUsers,
    FaCog,
    FaUser
} from 'react-icons/fa';
import './VerticalNav.css';

const VerticalNav = () => {
    return (
        <div className="vertical-nav">
            <NavLink to="/chats" className="nav-icon" activeClassName="active">
                <FaComments />
            </NavLink>
            <NavLink to="/status" className="nav-icon" activeClassName="active">
                <FaCircle />
            </NavLink>
            <NavLink to="/communities" className="nav-icon" activeClassName="active">
                <FaUsers />
            </NavLink>
            <NavLink to="/settings" className="nav-icon" activeClassName="active">
                <FaCog />
            </NavLink>
            <NavLink to="/profile" className="nav-icon profile-icon" activeClassName="active">
                <img
                    src="/images/Superman.jpg"
                    alt="Perfil"
                    className="profile-image"
                />
            </NavLink>
        </div>
    );
};

export default VerticalNav;