import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircle, FaComments, FaUsers, FaCog, FaTimes } from 'react-icons/fa';
import './VerticalNav.css';

const VerticalNav = ({ isVisible, onClose }) => {
    return (
        <div className={`vertical-nav ${isVisible ? 'visible' : ''}`}>
            {/* Botón de cerrar (solo visible en móvil) */}
            <button className="close-nav" onClick={onClose}>
                <FaTimes />
            </button>
            
            {/* Iconos de navegación */}
            <NavLink 
                to="/chats" 
                className="nav-icon" 
                activeClassName="active"
                onClick={onClose} // Cierra el menú al seleccionar
            >
                <FaComments />
            </NavLink>
            <NavLink 
                to="/status" 
                className="nav-icon" 
                activeClassName="active"
                onClick={onClose}
            >
                <FaCircle />
            </NavLink>
            <NavLink 
                to="/communities" 
                className="nav-icon" 
                activeClassName="active"
                onClick={onClose}
            >
                <FaUsers />
            </NavLink>
            <NavLink 
                to="/settings" 
                className="nav-icon" 
                activeClassName="active"
                onClick={onClose}
            >
                <FaCog />
            </NavLink>
            <NavLink 
                to="/profile" 
                className="nav-icon profile-icon" 
                activeClassName="active"
                onClick={onClose}
            >
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