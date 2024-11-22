import Sidebar from '@/app/components/sidebar';
import CountryView from './components/country-view';
import Search from '@/app/components/search';

export default function CountryPage({ params: { id } }: { params: { id: string } }) {
  return (
    <section id="dashboard">
      <Search />
      <Sidebar />
      <CountryView id={id} />
    </section>
  );
}
