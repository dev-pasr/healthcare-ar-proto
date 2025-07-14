import React, { useEffect, useState } from 'react';

export default function UnresolvedDenials() {
  const [unresolved, setUnresolved] = useState([]);

  useEffect(() => {
    const allClaims = Object.keys(localStorage)
      .filter(k => k.startsWith('claim_') && k.endsWith('_resolutions'))
      .map(k => k.split('_')[1]);

    const unresolvedClaims = claims.filter(c => !allClaims.includes(c.id));

    const rows = unresolvedClaims.map(c => {
      return c.lineItems.map((item, idx) => ({
        claimId: c.id,
        lineIndex: idx,
        cpt: item.cpt,
        cause: item.denial?.cause || '—',
        carc: item.denial?.carc,
        rarc: item.denial?.rarc,
      }));
    }).flat();

    setUnresolved(rows);
  }, []);

  return (
    <table className="w-full text-sm bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Claim ID</th>
          <th className="p-2 text-left">Line</th>
          <th className="p-2 text-left">CPT</th>
          <th className="p-2 text-left">Cause</th>
          <th className="p-2 text-left">CARC/RARC</th>
        </tr>
      </thead>
      <tbody>
        {unresolved.length > 0 ? unresolved.map((r, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="p-2">{r.claimId}</td>
            <td className="p-2">{r.lineIndex}</td>
            <td className="p-2">{r.cpt}</td>
            <td className="p-2">{r.cause}</td>
            <td className="p-2">{r.carc} / {r.rarc}</td>
          </tr>
        )) : (
          <tr>
            <td colSpan="5" className="p-4 text-center text-gray-500">All denials have resolution records.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}