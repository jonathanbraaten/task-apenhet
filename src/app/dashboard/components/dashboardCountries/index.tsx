import { Suspense } from 'react';
import Countries from './components/countries';

export default function DashboardCountries() {
  return (
    <section id="dashboard-view">
      <Suspense fallback={'..laster'}>
        <Countries />
      </Suspense>
    </section>
  );
}
