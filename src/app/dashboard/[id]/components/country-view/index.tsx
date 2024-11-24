import { Suspense } from 'react';
import Chart from '../chart';

export default function CountryView({ id, params }: { id: string; params: string }) {
  return (
    <main id="dashboard-view">
      <Suspense fallback={'..laster'}>
        <Chart params={params} id={id} />
      </Suspense>
    </main>
  );
}
