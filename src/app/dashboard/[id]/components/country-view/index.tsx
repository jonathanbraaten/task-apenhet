import { Suspense } from 'react';
import Chart from '../chart';

export default function CountryView({ id }: { id: string }) {
  return (
    <main id="dashboard-view">
      <Suspense fallback={'..laster'}>
        <Chart id={id} />
      </Suspense>
    </main>
  );
}
