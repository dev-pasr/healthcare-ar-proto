import React, { useEffect, useState } from 'react';

export default function UserActivityAudit() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const allActivity = [];

    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('claim_') && key.endsWith('_resolutions')) {
        const claimId = key.split('_')[1];
        const records = JSON.parse(localStorage.getItem(key));

        Object.entries(records).forEach(([lineIndex, { action, notes, timestamp }]) => {
          allActivity.push({
            claimId,
            lineIndex,
            action,
            notes,
            timestamp,
          });
        });
      }
    });

    // Sort activity by timestamp (descending)
    allActivity.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    setActivity(allActivity);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">User Activity Audit</h2>

      <table className="w-full text-sm bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Claim ID</th>
            <th className="p-2 text-left">Line Item</th>
            <th className="p-2 text-left">Action</th>
            <th className="p-2 text-left">Notes</th>
            <th className="p-2 text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {activity.length > 0 ? activity.map((entry, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="p-2">{entry.claimId}</td>
              <td className="p-2">{entry.lineIndex}</td>
              <td className="p-2">{entry.action || '—'}</td>
              <td className="p-2">{entry.notes || '—'}</td>
              <td className="p-2 text-xs text-gray-500">
                {entry.timestamp ? new Date(entry.timestamp).toLocaleString() : '—'}
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">No resolution actions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}