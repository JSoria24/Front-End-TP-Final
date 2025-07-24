import React from 'react';
import './ChatList.css';
import { contacts } from '../../Data/contacts';

const ChatList = ({ setActiveChat }) => {
    return (
        <div className="chatList">
            {contacts.map(contact => (
                <div
                    key={contact.id}
                    className="chatListItem"
                    onClick={() => setActiveChat(contact)}
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