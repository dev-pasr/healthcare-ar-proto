import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { claims } from '../data/claims';
import FilterBar from '../components/FilterBar';

export default function ClaimListPage() {
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [minBalance, setMinBalance] = useState('');

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setOriginalList(claims);
    setFilteredList(claims);
  }, []);

  useEffect(() => {
    let updated = [...originalList];

    if (searchTerm.trim()) {
      updated = updated.filter(c =>
        c.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'All') {
      updated = updated.filter(c => c.status.toLowerCase() === statusFilter.toLowerCase());
    }

    if (minBalance) {
      updated = updated.filter(c => c.balanceDue >= Number(minBalance));
    }

    if (sortKey) {
      updated.sort((a, b) => {
        const x = a[sortKey];
        const y = b[sortKey];
        if (typeof x === 'number') return sortOrder === 'asc' ? x - y : y - x;
        return sortOrder === 'asc' ? x.localeCompare(y) : y.localeCompare(x);
      });
    }

    setFilteredList(updated);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, sortKey, sortOrder, minBalance, originalList]);

  const handleSort = key => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
  };

  const statusColor = status => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'text-green-600 font-semibold';
      case 'pending':
        return 'text-yellow-600 font-semibold';
      case 'denied':
        return 'text-red-600 font-semibold';
      default:
        return 'text-gray-600';
    }
  };

  const totalClaims = filteredList.length;
  const totalBilled = filteredList.reduce((sum, c) => sum + c.amountBilled, 0);
  const totalPaid = filteredList.reduce((sum, c) => sum + c.amountPaid, 0);
  const totalBalance = filteredList.reduce((sum, c) => sum + c.balanceDue, 0);

  const totalPages = Math.ceil(filteredList.length / pageSize);
  const paginatedClaims = filteredList.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Claim Analytics</h1>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        minBalance={minBalance}
        setMinBalance={setMinBalance}
      />

      {/* Page size selector and summary */}
      <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-gray-600">
        <div>
          Showing <strong>{paginatedClaims.length}</strong> of {filteredList.length} filtered claims
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="pageSize">Claims per page:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            {[5, 10, 25, 50].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Tiles */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white shadow rounded p-4">
          <p className="text-sm text-gray-500">Total Billed</p>
          <p className="text-xl font-semibold text-blue-700">${totalBilled.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-xl font-semibold text-green-700">${totalPaid.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-sm text-gray-500">Balance Due</p>
          <p className="text-xl font-semibold text-red-600">${totalBalance.toFixed(2)}</p>
        </div>
      </div>

      {/* Claims Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[{ key: 'id', label: 'Claim #' },
                { key: 'patientName', label: 'Patient' },
                { key: 'dateOfService', label: 'DOS' },
                { key: 'amountBilled', label: 'Billed' },
                { key: 'amountPaid', label: 'Paid' },
                { key: 'balanceDue', label: 'Balance' },
                { key: 'status', label: 'Status' }]
              .map(h => (
                <th
                  key={h.key}
                  className="p-3 text-left cursor-pointer hover:text-blue-600"
                  onClick={() => handleSort(h.key)}
                >
                  {h.label}
                  {sortKey === h.key && <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedClaims.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">No matching claims found.</td>
              </tr>
            ) : (
              paginatedClaims.map(c => (
                <tr key={c.id} className="border-t hover:bg-gray-50">
                  <td className="p-2 text-blue-600 font-medium">
                    <Link to={`/claims/${c.id}`}>{c.id}</Link>
                  </td>
                  <td className="p-2">{c.patientName}</td>
                  <td className="p-2">{c.dateOfService}</td>
                  <td className="p-2">${c.amountBilled.toFixed(2)}</td>
                  <td className="p-2">${c.amountPaid.toFixed(2)}</td>
                  <td className="p-2">${c.balanceDue.toFixed(2)}</td>
                  <td className={`p-2 ${statusColor(c.status)}`}>{c.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div>Page {currentPage} of {totalPages}</div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}