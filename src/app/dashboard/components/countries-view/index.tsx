import { Suspense } from 'react';
import CountriesList from '../countries-list';
import CountriesSkeleton from '@/ui/skeleton/countriesSkeleton';

export default function CountriesView({ page }: { page: number }) {
  return (
    <main className="h-full">
      <Suspense fallback={<CountriesSkeleton limit={10} />}>
        <CountriesList page={page} />
      </Suspense>
    </main>
  );
}
