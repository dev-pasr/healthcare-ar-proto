import React, { useState } from 'react';
import KpiCards from './KpiCards';
import UnresolvedDenials from './tabs/UnresolvedDenials';
import ResolvedDenials from './tabs/ResolvedDenials';
import ResolutionSummary from './tabs/ResolutionSummary';
import TurnaroundReport from './tabs/TurnaroundReport';
import TopDenialReasons from './tabs/TopDenialReasons';
import UserActivityAudit from './tabs/UserActivityAudit';

const tabs = [
  { label: 'Unresolved Denials', component: UnresolvedDenials },
  { label: 'Resolved Denials', component: ResolvedDenials },
  { label: 'Resolution Summary', component: ResolutionSummary },
  { label: 'Turnaround Time', component: TurnaroundReport },
  { label: 'Top Denial Reasons', component: TopDenialReasons },
  { label: 'User Activity', component: UserActivityAudit },
];

export default function ReportDashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  // temporarily override tabs for testing
 const ActiveComponent = () => <div>Hello from report tab</div>;
// const ActiveComponent = tabs.find(tab => tab.label === activeTab)?.component;


  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Denial Workflow Reports</h1>

      <KpiCards />

      {/* Tab Navigation */}
      <div className="flex space-x-4 mt-4 border-b pb-2">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`text-sm px-3 py-1 rounded-t ${
              activeTab === tab.label
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-4">
      {ActiveComponent ? <ActiveComponent /> : <div>No report selected.</div>}
      </div>
    </div>
  );
}