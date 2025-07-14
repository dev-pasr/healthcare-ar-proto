import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { claims } from "../data/claims";
import AuditTrailModal from "../components/AuditTrailModal";

export default function ClaimDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const claimIndex = claims.findIndex((c) => c.id === id);
  const claim = claims[claimIndex];

  const prevClaim = claimIndex > 0 ? claims[claimIndex - 1] : null;
  const nextClaim =
    claimIndex < claims.length - 1 ? claims[claimIndex + 1] : null;

  // Resolution action list
  const resolutionOptions = [
    "Appealed to Payer",
    "Corrected Coding Error",
    "Authorization Submitted",
    "Medical Records Sent",
    "Eligibility Verified",
    "Resubmitted Claim",
    "Contacted Provider",
    "Patient Notified",
    "Denial Accepted (No Further Action)",
  ];
  const [resolutions, setResolutions] = useState({});
  const [isAuditModalOpen, setAuditModalOpen] = useState(false);

  useEffect(() => {
    const claimActionsKey = `claim_${id}_resolutions`;
    const stored = JSON.parse(localStorage.getItem(claimActionsKey)) || {};
    setResolutions(stored);
  }, [id]);

  const handleResolutionChange = (index, field, value) => {
    setResolutions((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  const handleSaveResolution = (index) => {
    const data = resolutions[index] || {};
    const timestamp = new Date().toISOString();

    const payload = {
      action: data.action || "",
      notes: data.notes || "",
      timestamp,
    };

    const claimActionsKey = `claim_${id}_resolutions`;
    const existing = JSON.parse(localStorage.getItem(claimActionsKey)) || {};
    existing[index] = payload;
    localStorage.setItem(claimActionsKey, JSON.stringify(existing));

    alert(`Saved resolution for Line ${index}.`);
  };

  if (!claim) {
    return (
      <div className="p-6 text-center text-red-600">
        Claim not found. Please check the ID and try again.
      </div>
    );
  }

  const {
    mbi,
    patientName,
    dateOfService,
    claimReceivedDate,
    remittanceDate,
    payer,
    providerNPI,
    claimType,
    processingStatus,
    paymentMethod,
    paymentTraceNumber,
    amountBilled,
    amountPaid,
    balanceDue,
    adjustmentGroupCodes,
    remarkCodes,
    status,
    lineItems,
  } = claim;

  const paidPercent = amountBilled > 0 ? (amountPaid / amountBilled) * 100 : 0;

  return (
    <>
      <div className="p-6 space-y-6">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate("/claims")}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            ← Back to Claims
          </button>
          <div className="flex gap-2">
            <button
              disabled={!prevClaim}
              onClick={() => navigate(`/claims/${prevClaim?.id}`)}
              className={`px-3 py-1 border rounded text-sm ${
                !prevClaim
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            <button
              disabled={!nextClaim}
              onClick={() => navigate(`/claims/${nextClaim?.id}`)}
              className={`px-3 py-1 border rounded text-sm ${
                !nextClaim
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800">
          Claim Details: {id}
        </h1>

        <button
          onClick={() => setAuditModalOpen(true)}
          className="mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700"
        >
          View Resolution Audit Trail
        </button>

        {/* Summary section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>MBI:</strong> {mbi}
          </div>
          <div>
            <strong>Patient:</strong> {patientName}
          </div>
          <div>
            <strong>Date of Service:</strong> {dateOfService}
          </div>
          <div>
            <strong>Claim Received:</strong> {claimReceivedDate}
          </div>
          <div>
            <strong>Remittance Date:</strong> {remittanceDate}
          </div>
          <div>
            <strong>Status:</strong>{" "}
            <span className="font-semibold text-blue-600">{status}</span>
          </div>
          <div>
            <strong>Claim Type:</strong> {claimType}
          </div>
          <div>
            <strong>Processing:</strong> {processingStatus}
          </div>
          <div>
            <strong>Payer:</strong> {payer}
          </div>
          <div>
            <strong>Provider NPI:</strong> {providerNPI}
          </div>
          <div>
            <strong>Payment Method:</strong> {paymentMethod}
          </div>
          <div>
            <strong>Trace #:</strong> {paymentTraceNumber}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Amount Billed</p>
            <p className="text-xl font-bold text-blue-700">
              ${amountBilled.toFixed(2)}
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow space-y-2">
            <p className="text-sm text-gray-500 flex justify-between">
              <span>Amount Paid</span>
              <span className="text-xs text-green-600 font-medium">
                {paidPercent.toFixed(1)}%
              </span>
            </p>
            <p className="text-xl font-bold text-green-700">
              ${amountPaid.toFixed(2)}
            </p>
            <div className="bg-gray-200 rounded h-2">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${paidPercent}%` }}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Balance Due</p>
            <p className="text-xl font-bold text-red-600">
              ${balanceDue.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Line Items */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Line Items</h2>
          <table className="w-full text-sm bg-white shadow rounded overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">CPT</th>
                <th className="p-2 text-left">Diagnosis</th>
                <th className="p-2 text-left">Charge</th>
                <th className="p-2 text-left">CARC / RARC</th>
                <th className="p-2 text-left">Reason</th>
                <th className="p-2 text-left">Resolution</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((item, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-2 font-semibold">{item.cpt}</td>
                  <td className="p-2">{item.diagnosis}</td>
                  <td className="p-2">${item.charge.toFixed(2)}</td>
                  <td className="p-2">
                    {item.denial ? (
                      <>
                        <div>
                          <span className="font-medium">
                            {item.denial.carc}
                          </span>
                          : {item.denial.carcDesc}
                        </div>
                        <div>
                          <span className="font-medium">
                            {item.denial.rarc}
                          </span>
                          : {item.denial.rarcDesc}
                        </div>
                        <div className="text-xs text-gray-500">
                          Date: {item.denial.date}
                        </div>
                      </>
                    ) : (
                      <span className="text-green-600">None</span>
                    )}
                  </td>
                  <td className="p-2">{item.denial?.cause || "—"}</td>
                  <td className="p-2">{item.denial?.resolution || "—"}</td>
                  <td className="p-2 space-y-2">
                    {
                      <div className="space-y-1">
                        <select
                          className="w-full border rounded text-sm p-1"
                          value={resolutions[idx]?.action || ""}
                          onChange={(e) =>
                            handleResolutionChange(
                              idx,
                              "action",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select action...</option>
                          {resolutionOptions.map((option, i) => (
                            <option key={i} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <textarea
                          rows={2}
                          className="w-full border rounded p-1 text-sm"
                          placeholder="Add resolution notes..."
                          value={resolutions[idx]?.notes || ""}
                          onChange={(e) =>
                            handleResolutionChange(idx, "notes", e.target.value)
                          }
                        />

                        <button
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                          onClick={() => handleSaveResolution(idx)}
                        >
                          Save Action
                        </button>
                        {resolutions[idx]?.timestamp && (
                          <p className="text-xs text-gray-500">
                            Last saved:{" "}
                            {new Date(
                              resolutions[idx].timestamp
                            ).toLocaleString()}
                          </p>
                        )}
                      </div>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Adjustment Codes */}
        <div className="mt-6 space-y-2 text-sm">
          <h2 className="text-xl font-semibold">Adjustment & Remark Codes</h2>
          <div>
            <strong>Group Codes:</strong>{" "}
            {adjustmentGroupCodes.join(", ") || "—"}
          </div>
          <div>
            <strong>Remarks:</strong> {remarkCodes.join(", ") || "—"}
          </div>
        </div>
      </div>
      {isAuditModalOpen && (
        <AuditTrailModal
          claimId={id}
          resolutions={resolutions}
          onClose={() => setAuditModalOpen(false)}
        />
      )}
    </>
  );
}
