import Search from '../components/search';
import Sidebar from '../components/sidebar';
import CountriesView from './components/countries-view';

export default function DashboardPage() {
  return (
    <section id="dashboard">
      <Search />
      <Sidebar />
      <CountriesView />
    </section>
  );
}
