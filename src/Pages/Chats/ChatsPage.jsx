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
                    <div className="chat chat--empty">
                        <h2>Selecciona un chat para comenzar</h2>
                    </div>
                } />
                <Route path="contact/:contactId" element={<Chat />} />
            </Routes>
        </div>
    );
};

export default ChatsPage;