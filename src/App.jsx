import React from 'react';
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
    return (
        <Router>
            <div className="app">
                <VerticalNav />
                <div className="app__body">
                    <Routes>
                        <Route path="/" element={<Navigate to="/chats" replace />} />
                        <Route path="/chats/*" element={<ChatsPage />} />
                        <Route path="/channels" element={<ChannelsPage />} />
                        <Route path="/communities" element={<CommunitiesPage />} />
                        <Route path="/status" element={<StatusPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;