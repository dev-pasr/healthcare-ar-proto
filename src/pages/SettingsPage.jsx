import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cog6ToothIcon, DocumentChartBarIcon } from "@heroicons/react/24/solid";
import DenialModal from "../components/DenialModal";

export default function SettingsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">System Settings & Reports</h1>

      {/* Denial Code Master */}
      <section className="bg-white p-6 rounded shadow space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Cog6ToothIcon className="w-6 h-6 text-blue-600" />
              Denial Code Master
            </h2>
            <p className="text-sm text-gray-500">
              Manage CARC/RARC codes, reasons, and resolutions.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Manage
          </button>
        </div>
      </section>

      {/* Reports Section */}
      <section className="bg-white p-6 rounded shadow space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DocumentChartBarIcon className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold">Reports & Exports</h2>
          </div>
          <Link
            to="/reports"
            className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            Open Reporting Dashboard
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Access analytics for unresolved claims, resolution audits, turnaround
          metrics, and summary charts.
        </p>
      </section>

      <Link to="/" className="text-sm text-blue-600 hover:underline block mt-4">
        ← Back to Dashboard
      </Link>

      <DenialModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
