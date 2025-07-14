import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ user, onLogout }) {
  const loc = useLocation().pathname;
  return (
    <nav className="bg-white shadow flex items-center px-6 h-16">
      <div className="flex-1 text-xl font-semibold">AR Manager</div>
      <div className="space-x-4">
        <Link className={loc === '/claims' ? 'underline' : ''} to="/claims">Claims</Link>
        <Link className={loc === '/settings' ? 'underline' : ''} to="/settings">Settings</Link>
        <button className="ml-4 text-red-600" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}