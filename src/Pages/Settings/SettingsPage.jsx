import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch} from 'react-icons/fa';
import './SettingsPage.css';

const SettingsPage = () => {
    return (
        <div className="page-container">
            <div className='settings-header'>
                <h1>Ajustes</h1>
            </div>
            {/* Barra de búsqueda */}
            <div className="settings-search">
                <FaSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Buscar en los ajustes" 
                    className="search-input"
                />
            </div>
            
            {/* Sección de perfil */}
            <Link to="/profile" className="profile-section">
                <div className="profile-picture">
                    <img 
                        src="/images/Superman.jpg" 
                        alt="Foto de perfil" 
                        className="profile-photo"
                    />
                </div>
                <div className="profile-info">
                    <h3>Superman</h3>
                    <p>Si!, soy un SuperHeroe y estoy usando WhatsApp.</p>
                </div>

            </Link>
            <div className="settings-divider"></div>
            
            {/* Lista de ajustes */}
            <div className="settings-list">
                <div className="settings-item">
                    <span>Cuenta</span>
                    <p>¡Hola! Estoy usando WhatsApp.</p>

                </div>
                <div className="settings-item">
                    <span>Privacidad</span>
                    <p>Notificaciones de seguridad, información de la cuenta</p>

                </div>
                <div className="settings-item">
                    <span>Chats</span>
                    <p>Contactos bloqueados, mensajes temporales</p>
                </div>
                <div className="settings-item">
                    <span>Notificaciones</span>
                    <p>Tema, fondo, ajustes del chat</p>

                </div>
                <div className="settings-item">
                    <span>Atajos del teclado</span>
                    <p>Acciones rápidas</p>

                </div>
                <div className="settings-item">
                    <span>Ayuda</span>
                    <p>Centro de ayuda, contáctanos, politica de privacidad</p>

                </div>
                
                <div className="settings-divider"></div>
                
                <div className="settings-item logout">
                    <span>Cerrar sesión</span>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;