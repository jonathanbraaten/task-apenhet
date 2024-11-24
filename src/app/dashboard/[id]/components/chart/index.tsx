import { fetchCountry } from '@/app/actions/actions';
import LineChartByYear from './line-chart-by-year';
import LineChartByRate from './line-chart-by-rate';

import clsx from 'clsx';
import Link from 'next/link';

export default async function Chart({ id, params }: { id: string; params: string }) {
  const data = await fetchCountry(id);
  const renderChart = () => {
    switch (params) {
      case 'growthByYear':
        return <LineChartByYear data={data} />;
      case 'growthByRate':
        return <LineChartByRate data={data} />;
    }
  };

  return (
    <section className={clsx('flex flex-col gap-5  h-full ')}>
      <hr />
      <div className="h-full flex gap-5 flex-col items-center   px-14 ">
        <div className="text-md font-medium flex gap-4">
          <Link
            className=" flex items-center rounded-md px-2 p-1 bg-purple-300"
            href={`/dashboard/${id}?chart=growthByYear`}
          >
            {' '}
            <span>Growth by year</span>
          </Link>
          <Link
            className="bg-blue-300 flex items-center rounded-md px-3"
            href={`/dashboard/${id}?chart=growthByRate`}
          >
            {' '}
            <span> Growth by rate</span>
          </Link>
        </div>
        {renderChart()}
      </div>
    </section>
  );
}
