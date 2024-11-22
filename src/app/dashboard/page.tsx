import DashboardSearch from './components/dashboardSearch';
import DashboardSidebar from './components/dashboardSidebar';
import ClientWrapper from './components/dashboardView/clientWrapper';

export default function Dashboard() {
  return (
    <section id="dashboard">
      <DashboardSidebar />
      <DashboardSearch />
      <ClientWrapper />
    </section>
  );
}
