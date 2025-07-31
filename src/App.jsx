import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import VerticalNav from './Components/Navigation/VerticalNav';
import ChatsPage from './Pages/Chats/ChatsPage';
import ChannelsPage from './Pages/Channels/ChannelsPage';
import CommunitiesPage from './Pages/Communities/CommunitiesPage';
import StatusPage from './Pages/Status/StatusPage';
import SettingsPage from './Pages/Settings/SettingsPage';
import ProfilePage from './Pages/Profile/ProfilePage';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Cambiado a 768px para coincidir con tu media query
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <div className={`app ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
                <VerticalNav isMobile={isMobile} />
                <div className="main-content-container">
                    <Routes>
                        <Route path="/" element={<Navigate to="/chats" replace />} />
                        <Route path="/chats/*" element={<ChatsPage isMobile={isMobile} />} />
                        <Route path="/channels" element={<ChannelsPage isMobile={isMobile} />} />
                        <Route path="/communities" element={<CommunitiesPage isMobile={isMobile} />} />
                        <Route path="/status" element={<StatusPage isMobile={isMobile} />} />
                        <Route path="/settings" element={<SettingsPage isMobile={isMobile} />} />
                        <Route path="/profile" element={<ProfilePage isMobile={isMobile} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;