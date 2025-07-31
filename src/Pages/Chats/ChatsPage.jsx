import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chat from '../../Components/Chat/Chat';
import { IoLockClosedSharp } from "react-icons/io5";
import './ChatsPage.css';

const ChatsPage = () => {
    return (
        
        <div className="chats-page">
            <Sidebar />
            <div className="main-content-area">
                <Routes>
                    <Route index element={
                        <div className="welcome-screen">
                            <div className="welcome-content">
                                <img 
                                    src="/images/laptopwhatsapp.png" 
                                    alt="WhatsApp" 
                                    className="welcome-logo"
                                />
                                <h2>Descarga WhatsApp para Windows</h2>
                                <p className="welcome-text">
                                    Descarga la aplicación para Windows y haz llamadas, comparte pantalla y 
                                    disfruta de una experiencia más rápida.
                                </p>
                                <button className="download-btn">
                                    Descargar
                                </button>
                                <div className="encryption-notice">
                                    <IoLockClosedSharp />
                                    <span>Tus mensajes personales están cifrados de extremo a extremo</span>
                                </div>
                            </div>
                        </div>
                    } />
                    <Route path="contact/:contactId" element={<Chat />} />
                </Routes>
            </div>
        </div>
    );
};

export default ChatsPage;