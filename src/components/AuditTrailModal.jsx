import React from "react";

export default function AuditTrailModal({ claimId, resolutions, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">
          Action Audit Trail: Claim {claimId}
        </h2>
        {Object.keys(resolutions).length > 0 ? (
          <ul className="space-y-4 text-sm">
            {Object.entries(resolutions).map(
              ([index, { action, notes, timestamp }]) => (
                <li key={index} className="border p-3 rounded">
                  <p>
                    <strong>Line Item:</strong> {index}
                  </p>
                  <p>
                    <strong>Action:</strong> {action || "—"}
                  </p>
                  <p>
                    <strong>Notes:</strong> {notes || "—"}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Saved At:</strong>{" "}
                    {timestamp ? new Date(timestamp).toLocaleString() : "—"}
                  </p>
                </li>
              )
            )}
          </ul>
        ) : (
          <div className="text-gray-600 text-sm italic">
            No resolution actions have been recorded for this claim yet.
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
