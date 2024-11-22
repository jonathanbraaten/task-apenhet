import { Suspense } from 'react';
import DashboardSearch from './components/dashboardSearch';
import DashboardSidebar from './components/dashboardSidebar';

import DashboardView from './components/dashboardView';

export default function Dashboard() {
  return (
    <section id="dashboard">
      <DashboardSidebar />
      <DashboardSearch />
      <DashboardView />
    </section>
  );
}
