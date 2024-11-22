import { Suspense } from 'react';
import CountryData from './countryData';

export default function DashboardView() {
  return (
    <section id="dashboard-view">
      <Suspense fallback={'..laster'}>
        <CountryData />
      </Suspense>
    </section>
  );
}
