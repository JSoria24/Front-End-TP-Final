import React from 'react';
import './StatusPage.css';
import { FaPlus, FaEllipsisV } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoLockClosedSharp } from "react-icons/io5";

const StatusPage = () => {
    return (
        <div className="status-page">
            {/* Header */}
            <header className="status-header">
                <h1>Estados</h1>
                <div className="header-icons">
                    <FaPlus className="icon" />
                    <FaEllipsisV className="icon" />
                </div>
            </header>

            {/* Mi estado */}
            <div className="my-status">
                <div className="profile-image-container">
                    <img 
                        src="./images/user2.png" 
                        alt="Perfil" 
                        className="profile-image"
                    />
                    <IoMdAddCircleOutline className="add-status-icon" />
                </div>
                <div className="status-info">
                    <h2>Mi estado</h2>
                    <span>Haz clic para añadir una actualización de estado</span>
                </div>
            </div>

            {/* Recientes */}
            <div className="recent-statuses">
                <h3>RECIENTE</h3>
                <div className="status-item">
                    <strong>Homelander</strong>
                    <span>Hoy a la(s) 08:17</span>
                </div>
                <div className="status-notice">
                    <IoLockClosedSharp />
                    <label htmlFor="encryption-notice">Tus actualizaciones de estado están cifradas de extremo a extremo</label>
                </div>
            </div>
        </div>
    );
};

export default StatusPage;