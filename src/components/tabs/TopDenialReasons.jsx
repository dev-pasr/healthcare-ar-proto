import React, { useEffect, useState } from 'react';

export default function TopDenialReasons() {
  const [reasons, setReasons] = useState({});

  useEffect(() => {
    const map = {};

    claims.forEach(c => {
      c.lineItems.forEach(item => {
        const reason = item.denial?.cause;
        if (reason) {
          map[reason] = (map[reason] || 0) + 1;
        }
      });
    });

    setReasons(map);
  }, []);

  return (
    <table className="w-full text-sm bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Denial Reason</th>
          <th className="p-2 text-left">Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(reasons).map(([reason, count], i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="p-2">{reason}</td>
            <td className="p-2">{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}