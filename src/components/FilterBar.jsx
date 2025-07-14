import React from 'react';

export default function FilterBar({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, minBalance, setMinBalance }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-64"
        placeholder="Search by Patient or Claim #"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select
        value={statusFilter}
        onChange={e => setStatusFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">All Statuses</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Denied">Denied</option>
      </select>
      <input
        type="number"
        className="border p-2 rounded w-32"
        placeholder="Min Balance"
        value={minBalance}
        onChange={e => setMinBalance(e.target.value)}
      />
    </div>
  );
}