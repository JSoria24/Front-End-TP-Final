import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chat from '../../Components/Chat/Chat';
import VerticalNav from '../../Components/Navigation/VerticalNav';
import { IoLockClosedSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import './ChatsPage.css';

const ChatsPage = () => {
    const [showVerticalNav, setShowVerticalNav] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determina si estamos viendo un chat específico
    const isChatOpen = location.pathname.includes('/contact/');

    return (
        <div className="chats-page">
            {/* Botón de menú (solo móvil y cuando no hay chat abierto) */}
            {isMobile && !isChatOpen && (
                <button
                    className="nav-menu-button right"
                    onClick={() => setShowVerticalNav(true)}
                >
                    <FiMenu />
                </button>
            )}

            {/* VerticalNav (solo móvil) */}
            {isMobile && (
                <VerticalNav 
                    isVisible={showVerticalNav} 
                    onClose={() => setShowVerticalNav(false)}
                />
            )}

            {/* Sidebar - Lista de chats (oculto en móvil cuando hay chat abierto) */}
            {(!isMobile || !isChatOpen) && (
                <Sidebar />
            )}

            {/* Área de contenido principal */}
            <div className={`main-content-area ${isChatOpen ? 'chat-open' : ''}`}>
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
                    <Route path="contact/:contactId" element={
                        <>
                            {isMobile && (
                                <button
                                    className="back-button"
                                    onClick={() => navigate('/chats')}
                                >
                                    ←
                                </button>
                            )}
                            <Chat />
                        </>
                    } />
                </Routes>
            </div>
        </div>
    );
};

export default ChatsPage;