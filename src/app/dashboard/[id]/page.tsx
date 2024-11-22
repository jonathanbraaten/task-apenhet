import Sidebar from '@/app/components/sidebar';
import CountryView from './components/country-view';
import Search from '@/app/components/search';
import Link from 'next/link';

export default async function CountryPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <section id="dashboard">
      <div id="search" className="flex items-center px-12">
        <Link
          className="bg-gray-200 px-2 inline-flex rounded-full text-xl font-medium  items-center hover:bg-gray-300 duration-75 "
          href={'/dashboard'}
        >
          <span> Go back</span>
        </Link>
      </div>
      <Sidebar />
      <CountryView id={id} />
    </section>
  );
}
