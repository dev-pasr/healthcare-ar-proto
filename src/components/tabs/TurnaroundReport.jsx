import React, { useEffect, useState } from 'react';

export default function TurnaroundReport() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const result = [];

    Object.keys(localStorage).forEach(key => {
      if (key.endsWith('_resolutions')) {
        const claimId = key.split('_')[1];
        const resData = JSON.parse(localStorage.getItem(key));
        const claim = claims.find(c => c.id === claimId);
        if (!claim) return;

        Object.entries(resData).forEach(([idx, { timestamp }]) => {
          const denialDate = claim.lineItems[idx]?.denial?.date;
          if (denialDate && timestamp) {
            const start = new Date(denialDate);
            const end = new Date(timestamp);
            const days = Math.round((end - start) / (1000 * 60 * 60 * 24));

            result.push({
              claimId,
              lineIndex: idx,
              denialDate,
              resolvedAt: timestamp,
              turnaround: `${days} day(s)`
            });
          }
        });
      }
    });

    setRows(result);
  }, []);

  return (
    <table className="w-full text-sm bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Claim ID</th>
          <th className="p-2 text-left">Line</th>
          <th className="p-2 text-left">Denial Date</th>
          <th className="p-2 text-left">Resolution Date</th>
          <th className="p-2 text-left">Turnaround</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? rows.map((r, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="p-2">{r.claimId}</td>
            <td className="p-2">{r.lineIndex}</td>
            <td className="p-2">{new Date(r.denialDate).toLocaleDateString()}</td>
            <td className="p-2">{new Date(r.resolvedAt).toLocaleDateString()}</td>
            <td className="p-2">{r.turnaround}</td>
          </tr>
        )) : (
          <tr>
            <td colSpan="5" className="p-4 text-center text-gray-500">No turnaround data available.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}