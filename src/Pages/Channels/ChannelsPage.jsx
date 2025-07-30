import React from 'react';
import './ChannelsPage.css';

const ChannelsPage = () => {
    return (
        <div className="channels-page">
            <h2>Tus Canales</h2>
            <div className="channels-list">
                <p>Aquí aparecerán tus canales suscritos</p>
                {/* Puedes agregar componentes de canales aquí */}
            </div>
        </div>
    );
};

export default ChannelsPage;