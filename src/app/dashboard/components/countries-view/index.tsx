import { Suspense } from 'react';
import CountriesList from '../countries-list';
import CountriesSkeleton from '@/ui/skeleton/countriesSkeleton';

export default function CountriesView() {
  return (
    <main id="dashboard-view">
      <Suspense fallback={<CountriesSkeleton limit={10} />}>
        <CountriesList />
      </Suspense>
    </main>
  );
}
