import React from 'react';
import './CommunitiesPage.css';
import { FaPlus } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';

const CommunitiesPage = () => {
    return (
        <div className="communities-page">
            {/* Header */}
            <header className="communities-header">
                <h1>Comunidades</h1>
                <FaPlus className="add-icon" />
            </header>

            {/* Main content */}
            <div className="communities-content">
                <div className="communities-icon-container">
                    <MdGroups className="communities-icon" />
                </div>

                <h2>Crea una comunidad para mantenerte en contacto</h2>

                <p className="communities-description">
                    Las comunidades reúnen a los miembros en grupos por temas y facilitan la recepción de avisos de los administradores. Cualquier comunidad a la que te añadan aparecerá aquí.
                </p>

                <a
                    href="https://faq.whatsapp.com/231869526393268?lang=es"
                    className="examples-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver ejemplos de comunidades
                </a>
            </div>

            {/* Footer button */}
            <div className="communities-footer">
                <button className="create-community-btn">
                    Iniciar tu comunidad
                </button>
            </div>
        </div>
    );
};

export default CommunitiesPage;