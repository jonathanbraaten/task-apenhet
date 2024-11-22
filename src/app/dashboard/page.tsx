import DashboardSearch from './components/dashboardSearch';
import DashboardSidebar from './components/dashboardSidebar';

import DashboardCountries from './components/dashboardCountries';

export default function Dashboard() {
  return (
    <section id="dashboard">
      <DashboardSidebar />
      <DashboardSearch />
      <DashboardCountries />
    </section>
  );
}
