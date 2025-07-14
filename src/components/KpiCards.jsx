import React from 'react';

export default function KpiCards() {
  const totalClaims = localStorage.length;
  const resolved = Object.keys(localStorage).filter(k => k.includes('_resolutions')).length;
  const unresolved = totalClaims - resolved;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-sm text-gray-500">Total Claims</p>
        <p className="text-2xl font-bold text-gray-800">{totalClaims}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-sm text-gray-500">Resolved Denials</p>
        <p className="text-2xl font-bold text-green-700">{resolved}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-sm text-gray-500">Unresolved</p>
        <p className="text-2xl font-bold text-red-600">{unresolved}</p>
      </div>
    </div>
  );
}