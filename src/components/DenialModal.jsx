import React, { useState } from 'react';

const denialSeed = [
  // Insert all your denial code entries here from denialCodes.js
 {
    id: 1,
    carc: 'CARC96',
    carcDesc: 'Non-covered charge(s).',
    rarc: 'N130',
    rarcDesc: 'Consult plan benefit documentation.',
    cause: 'Service excluded from plan',
    resolution: 'Appeal with documentation or bill secondary payer'
  },
  {
    id: 2,
    carc: 'CARC16',
    carcDesc: 'Missing required information.',
    rarc: 'MA61',
    rarcDesc: 'Diagnosis inconsistent with procedure.',
    cause: 'Diagnosis doesn’t support CPT service',
    resolution: 'Correct ICD-10 coding and resubmit'
  },
  {
    id: 3,
    carc: 'CARC109',
    carcDesc: 'Service not payable per guidelines.',
    rarc: 'N330',
    rarcDesc: 'Frequency exceeds coverage limit.',
    cause: 'Lab billed more than once within allowed period',
    resolution: 'Submit medical necessity or appeal with override'
  },
  {
    id: 4,
    carc: 'CARC111',
    carcDesc: 'Not covered unless preventive.',
    rarc: 'N19',
    rarcDesc: 'Benefit not covered.',
    cause: 'Preventive visit outside eligibility window',
    resolution: 'Check preventive schedule or request override'
  },
  {
    id: 5,
    carc: 'CARC119',
    carcDesc: 'Benefit maximum reached.',
    rarc: 'N699',
    rarcDesc: 'Service exceeds frequency limits.',
    cause: 'Cardiac stress test repeated too soon',
    resolution: 'Submit physician’s override justification'
  },
  {
    id: 6,
    carc: 'CARC50',
    carcDesc: 'Non-covered services.',
    rarc: 'M86',
    rarcDesc: 'Missing referral or prior authorization.',
    cause: 'Behavioral health visit lacked pre-auth',
    resolution: 'Attach retro authorization or initiate appeal'
  },
  {
    id: 7,
    carc: 'CARC54',
    carcDesc: 'Multiple physicians bill separately.',
    rarc: 'N699',
    rarcDesc: 'Unbundled services.',
    cause: 'Therapy consult billed without compliance bundling',
    resolution: 'Adjust coding or attach bundling rationale'
  },
  {
    id: 8,
    carc: 'CARC97',
    carcDesc: 'Included in allowance for another service.',
    rarc: 'N390',
    rarcDesc: 'Bundled adjustment.',
    cause: 'Evaluation bundled into preventive service',
    resolution: 'Resubmit with modifier or separate claim'
  },
  {
    id: 9,
    carc: 'CARC45',
    carcDesc: 'Charge exceeds fee schedule.',
    rarc: 'N365',
    rarcDesc: 'Service not covered.',
    cause: 'Procedure billed above allowed amount',
    resolution: 'Adjust to fee schedule and resubmit'
  }
  // Add more entries here...
];

export default function DenialModal({ show, onClose }) {
  const [entries, setEntries] = useState(denialSeed);
  const [form, setForm] = useState({
    id: null, carc: '', carcDesc: '', rarc: '', rarcDesc: '', cause: '', resolution: ''
  });
  const [editingId, setEditingId] = useState(null);

  // Pagination logic
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(entries.length / pageSize);
  const currentPageEntries = entries.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (!show) return null;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const updated = editingId
      ? entries.map(item => (item.id === editingId ? { ...form, id: editingId } : item))
      : [...entries, { ...form, id: Date.now() }];
    setEntries(updated);
    setForm({ id: null, carc: '', carcDesc: '', rarc: '', rarcDesc: '', cause: '', resolution: '' });
    setEditingId(null);
    setCurrentPage(1);
  };

  const handleEdit = entry => {
    setForm(entry);
    setEditingId(entry.id);
  };

  const handleDelete = id => {
    if (window.confirm('Delete this denial code?')) {
      const updated = entries.filter(item => item.id !== id);
      setEntries(updated);
      if ((currentPage - 1) * pageSize >= updated.length) setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold">Manage Denial Codes</h2>
          <button onClick={onClose} className="text-blue-600 hover:underline text-sm">Close</button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-4 overflow-y-auto flex-1 space-y-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <div className="grid grid-cols-2 gap-4">
              <input name="carc" value={form.carc} onChange={handleChange} required placeholder="CARC" className="border p-2 rounded" />
              <input name="carcDesc" value={form.carcDesc} onChange={handleChange} required placeholder="CARC Description" className="border p-2 rounded" />
              <input name="rarc" value={form.rarc} onChange={handleChange} required placeholder="RARC" className="border p-2 rounded" />
              <input name="rarcDesc" value={form.rarcDesc} onChange={handleChange} required placeholder="RARC Description" className="border p-2 rounded" />
            </div>
            <textarea name="cause" value={form.cause} onChange={handleChange} required placeholder="Denial Cause" className="border p-2 rounded" />
            <textarea name="resolution" value={form.resolution} onChange={handleChange} required placeholder="Resolution Suggestion" className="border p-2 rounded" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {editingId ? 'Update Entry' : 'Add Denial Code'}
            </button>
          </form>

          {/* Table */}
          <table className="w-full text-sm border shadow rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">CARC</th>
                <th className="p-2">CARC Desc</th>
                <th className="p-2">RARC</th>
                <th className="p-2">RARC Desc</th>
                <th className="p-2">Cause</th>
                <th className="p-2">Resolution</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPageEntries.map(entry => (
                <tr key={entry.id} className="border-t hover:bg-gray-50">
                  <td className="p-2 font-medium">{entry.carc}</td>
                  <td className="p-2">{entry.carcDesc}</td>
                  <td className="p-2">{entry.rarc}</td>
                  <td className="p-2">{entry.rarcDesc}</td>
                  <td className="p-2">{entry.cause}</td>
                  <td className="p-2">{entry.resolution}</td>
                  <td className="p-2 space-x-2">
                    <button onClick={() => handleEdit(entry)} className="text-blue-600 text-sm">Edit</button>
                    <button onClick={() => handleDelete(entry.id)} className="text-red-600 text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-3 border-t bg-gray-50 text-sm">
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2 items-center">
            <select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setCurrentPage(1); }} className="border rounded px-2 py-1">
              {[5, 10, 25].map(size => (
                <option key={size} value={size}>{size} per page</option>
              ))}
            </select>
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}