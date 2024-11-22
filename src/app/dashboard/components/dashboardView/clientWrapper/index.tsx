'use client';
import { useState } from 'react';
import DashboardView from '..';

export default function ClientWrapper() {
  const [toggleView, setToggleView] = useState(false);
  const handleView = () => {};

  const displayCountries = () => <DashboardView />;
  const displayChart = () => <div>nice</div>;

  return (
    <div id="dashboard-ui">
      {/*     <DashboardView /> */}

      {toggleView ? displayChart() : displayCountries()}
    </div>
  );
}
