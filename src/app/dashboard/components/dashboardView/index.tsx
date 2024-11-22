import { Suspense } from 'react';
import CountryData from './countryData';

export default function DashboardView() {
  return (
    <section id="dashboard-view" className="bg-orange-500">
      <Suspense fallback={'..laster'}>
        <CountryData />
      </Suspense>
    </section>
  );
}
