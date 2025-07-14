import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ClaimListPage from './pages/ClaimListPage';
import ClaimDetailPage from './pages/ClaimDetailPage';
import SettingsPage from './pages/SettingsPage';
import NavBar from './components/NavBar';
import ReportDashboard from './components/ReportDashboard';


export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginPage onLogin={u => setUser(u)} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar onLogout={() => setUser(null)} user={user} />
      <main className="p-6 flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/claims" />} />
          <Route path="/claims" element={<ClaimListPage />} />
          <Route path="/claims/:id" element={<ClaimDetailPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/reports" element={<ReportDashboard />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}