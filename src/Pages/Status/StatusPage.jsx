import React from 'react';
import './StatusPage.css';

const StatusPage = () => {
    return (
        <div className="status-page">
            <h2>Estados</h2>
            <div className="status-list">
                <p>Aquí aparecerán tus Estados</p>
                {/* Puedes agregar componentes de comunidades aquí */}
            </div>
        </div>
    );
};

export default StatusPage;