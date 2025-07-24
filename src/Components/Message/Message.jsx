import React from 'react';
import './Message.css';

const Message = ({ message, isMe }) => {
    return (
        <div className={`message ${isMe ? 'message--me' : 'message--them'}`}>
            <p className="message__text">{message.text}</p>
            <span className="message__time">{message.time}</span>
        </div>
    );
};

export default Message;