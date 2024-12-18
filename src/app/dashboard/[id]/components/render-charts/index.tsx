import { Suspense } from 'react';
import Chart from '../chart';

export default function RenderCharts({ id, params }: { id: string; params: string }) {
  return (
    <main
      className=" h-[calc(100vh-5rem)]
    "
    >
      <Suspense fallback={'..laster'}>
        <Chart params={params} id={id} />
      </Suspense>
    </main>
  );
}
