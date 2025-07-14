import React, { useState } from 'react';
import { denialCodes as initialData } from '../data/denialCodes';

export default function DenialCodeMaster() {
  const [entries, setEntries] = useState(initialData);
  const [form, setForm] = useState({
    id: null, carc: '', carcDesc: '', rarc: '', rarcDesc: '', cause: '', resolution: ''
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingId !== null) {
      setEntries(prev =>
        prev.map(item => (item.id === editingId ? { ...form, id: editingId } : item))
      );
    } else {
      setEntries(prev => [...prev, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, carc: '', carcDesc: '', rarc: '', rarcDesc: '', cause: '', resolution: '' });
    setEditingId(null);
  };

  const handleEdit = entry => {
    setForm(entry);
    setEditingId(entry.id);
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this denial code?')) {
      setEntries(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Denial Code Master</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <input name="carc" value={form.carc} onChange={handleChange} required placeholder="CARC code" className="border p-2 rounded" />
          <input name="carcDesc" value={form.carcDesc} onChange={handleChange} required placeholder="CARC description" className="border p-2 rounded" />
          <input name="rarc" value={form.rarc} onChange={handleChange} required placeholder="RARC code" className="border p-2 rounded" />
          <input name="rarcDesc" value={form.rarcDesc} onChange={handleChange} required placeholder="RARC description" className="border p-2 rounded" />
        </div>
        <textarea name="cause" value={form.cause} onChange={handleChange} required placeholder="Denial cause" className="w-full border p-2 rounded" />
        <textarea name="resolution" value={form.resolution} onChange={handleChange} required placeholder="Recommended resolution" className="w-full border p-2 rounded" />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          {editingId ? 'Update' : 'Add Denial Code'}
        </button>
      </form>

      {/* Listing Table */}
      <table className="w-full bg-white text-sm shadow rounded">
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
          {entries.map(entry => (
            <tr key={entry.id} className="border-t hover:bg-gray-50">
              <td className="p-2 font-medium">{entry.carc}</td>
              <td className="p-2">{entry.carcDesc}</td>
              <td className="p-2">{entry.rarc}</td>
              <td className="p-2">{entry.rarcDesc}</td>
              <td className="p-2">{entry.cause}</td>
              <td className="p-2">{entry.resolution}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => handleEdit(entry)} className="text-blue-600 hover:underline text-sm">Edit</button>
                <button onClick={() => handleDelete(entry.id)} className="text-red-600 hover:underline text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}