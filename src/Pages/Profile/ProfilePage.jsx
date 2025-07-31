import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="page-container">
            <div className="profile-header">
                <h2>Perfil</h2>
            </div>
            
            <div className="profile-photo-section">
                <div className="profile-photo-wrapper">
                    <div className="profile-photo-container">
                        <img 
                            src="/images/Superman.jpg" 
                            alt="Foto de perfil" 
                            className="profile-photo"
                        />
                    </div>
                    <div className="photo-edit-overlay">
                        <FaPencilAlt className="edit-icon" />
                    </div>
                </div>
            </div>
            
            <div className="profile-info-section">
                <div className="info-item">
                    <span className="info-label">Tu nombre</span>
                    <div className="info-value">
                        <span>Superman</span>
                        <FaPencilAlt className="edit-icon-small" />
                    </div>
                </div>
                
                <p className="name-disclaimer">
                    Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp.
                </p>
                
                <div className="info-item">
                    <span className="info-label">Info</span>
                    <div className="info-value">
                        <span>¡Hola! Estoy usando WhatsApp.</span>
                        <FaPencilAlt className="edit-icon-small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;