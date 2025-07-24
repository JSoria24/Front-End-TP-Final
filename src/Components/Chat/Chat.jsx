import React, { useState, useEffect } from 'react';
import './Chat.css';
import Message from '../Message/Message';

const Chat = ({ activeChat }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        if (activeChat) {
            // Mensaje inicial cuando se selecciona un chat
            setMessages([{
                id: 1,
                text: activeChat.lastMessage,
                sender: 'them',
                time: activeChat.lastMessageTime
            }]);
        }
    }, [activeChat]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || !activeChat) return;

        // Agregar mensaje del usuario
        const newUserMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newUserMessage]);
        setInputMessage('');

        // Respuesta automática después de 1 segundo
        setTimeout(() => {
            const response = getAutoResponse(inputMessage, activeChat);
            if (response) {
                const newResponseMessage = {
                    id: messages.length + 2,
                    text: response,
                    sender: 'them',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, newResponseMessage]);
            }
        }, 1000);
    };

    const getAutoResponse = (message, contact) => {
        const lowerMessage = message.toLowerCase();
        for (const item of contact.responses) {
            if (lowerMessage.includes(item.trigger)) {
                return item.response;
            }
        }
        return "Gracias por tu mensaje. Te responderé pronto.";
    };

    if (!activeChat) {
        return (
            <div className="chat chat--empty">
                <h2>Selecciona un chat para comenzar</h2>
            </div>
        );
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <img src={activeChat.avatar} alt={activeChat.name} className="chat__avatar" />
                <div className="chat__headerInfo">
                    <h3>{activeChat.name}</h3>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <Message
                        key={message.id}
                        message={message}
                        isMe={message.sender === 'me'}
                    />
                ))}
            </div>

            <div className="chat__footer">
                <form onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Escribe un mensaje"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;