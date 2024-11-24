import { Suspense } from 'react';
import CountriesList from '../countries-list';

export default function RenderCountries({ page }: { page: number }) {
  return (
    <>
      <main className="h-full">
        <Suspense fallback={<section>...loading</section>}>
          <CountriesList page={page} />
        </Suspense>
      </main>
    </>
  );
}
