import { Suspense } from 'react';
import CountriesList from '../countries-list';

export default function CountriesView() {
  return (
    <section id="dashboard-view">
      <Suspense fallback={'..laster'}>
        <CountriesList />
      </Suspense>
    </section>
  );
}
