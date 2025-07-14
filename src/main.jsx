import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 updated import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 👈 createRoot instead of render
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);