import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatList.css';
import { contacts } from '../../Data/contacts';

const ChatList = () => {
    const navigate = useNavigate();

    return (
        <div className="chatList">
            {contacts.map(contact => (
                <div
                    key={contact.id}
                    className="chatListItem"
                    onClick={() => navigate(`/chats/contact/${contact.id}`, { replace: true })}
                // Agregamos { replace: true } y la ruta absoluta
                >
                    <img src={contact.avatar} alt={contact.name} className="chatListAvatar" />
                    <div className="chatListDetails">
                        <h3>{contact.name}</h3>
                        <p>{contact.lastMessage}</p>
                    </div>
                    <span className="chatListTime">{contact.lastMessageTime}</span>
                </div>
            ))}
        </div>
    );
};

export default ChatList;