import React, { useEffect, useState } from 'react';

export default function ResolutionSummary() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const countMap = {};

    Object.keys(localStorage).forEach(key => {
      if (key.endsWith('_resolutions')) {
        const records = JSON.parse(localStorage.getItem(key));
        Object.values(records).forEach(({ action }) => {
          if (action) {
            countMap[action] = (countMap[action] || 0) + 1;
          }
        });
      }
    });

    setSummary(countMap);
  }, []);

  const total = Object.values(summary).reduce((a, b) => a + b, 0);

  return (
    <table className="w-full text-sm bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Action Type</th>
          <th className="p-2 text-left">Count</th>
          <th className="p-2 text-left">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(summary).map(([action, count], i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="p-2">{action}</td>
            <td className="p-2">{count}</td>
            <td className="p-2">{((count / total) * 100).toFixed(1)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}