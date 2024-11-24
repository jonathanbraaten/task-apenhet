import { Suspense } from 'react';
import CountriesList from '../countries-list';
import CountriesCardSkeleton from '@/ui/skeleton/countries-card-skeleton';

export default function RenderCountries({ page }: { page: number }) {
  return (
    <>
      <main className="h-full">
        <Suspense fallback={<CountriesCardSkeleton limit={15} />}>
          <CountriesList page={page} />
        </Suspense>
      </main>
    </>
  );
}
