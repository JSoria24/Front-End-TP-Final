import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chat from '../../Components/Chat/Chat';
import './ChatsPage.css';

const ChatsPage = () => {
    return (
        <div className="chats-page">
            <Sidebar />
            <Routes>
                <Route index element={

                    <div>
                                            <div className="chat chat--empty">
                        <h2>Descarga WhatsApp para Windows</h2>
                        <p>Descarga la aplicacion para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
                    </div>
                    </div>
                } />
                <Route path="contact/:contactId" element={<Chat />} />
            </Routes>
        </div>
    );
};

export default ChatsPage;