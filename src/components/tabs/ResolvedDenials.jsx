import React, { useEffect, useState } from "react";

export default function ResolvedDenials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reportData = [];
    Object.keys(localStorage).forEach((key) => {
      if (key.endsWith("_resolutions")) {
        const claimId = key.split("_")[1];
        const items = JSON.parse(localStorage.getItem(key));
        Object.entries(items).forEach(([idx, res]) => {
          reportData.push({
            claimId,
            lineIndex: idx,
            ...res,
          });
        });
      }
    });
    setData(reportData);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Resolved Denials</h2>

      <table className="w-full text-sm bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Claim ID</th>
            <th className="p-2 text-left">Line</th>
            <th className="p-2 text-left">Action</th>
            <th className="p-2 text-left">Notes</th>
            <th className="p-2 text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((r, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-2">{r.claimId}</td>
                <td className="p-2">{r.lineIndex}</td>
                <td className="p-2">{r.action}</td>
                <td className="p-2">{r.notes}</td>
                <td className="p-2 text-xs text-gray-500">
                  {new Date(r.timestamp).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No resolved denials found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
