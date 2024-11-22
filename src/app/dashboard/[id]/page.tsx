import DashboardSearch from '../components/dashboardSearch';
import DashboardSidebar from '../components/dashboardSidebar';
import DashboardCountry from './components/dashboardCountry';

export default function Dashboard({ params: { id } }: { params: { id: string } }) {
  return (
    <section id="dashboard">
      <DashboardSidebar />
      <DashboardSearch />
      <DashboardCountry id={id} />
    </section>
  );
}
