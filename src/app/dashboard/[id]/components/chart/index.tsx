import { fetchCountry } from '@/app/actions/actions';
import PopulationGrowthByYearChart from './growth-by-year-chart';
import AnnualPopulationChart from './annual-population-chart';

import clsx from 'clsx';
import Link from 'next/link';
import { PopulationData } from '@/app/types';
import { abeezee } from '@/ui/fonts';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import ChartNavigation from './chart-navigation';

async function fetchData(id: string): Promise<PopulationData[] | null> {
  try {
    const data = await fetchCountry(id);
    if (!Array.isArray(data) || data.length < 1) {
      throw new Error('No valid data');
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Chart({ id, params }: { id: string; params: string }) {
  const data = await fetchData(id);
  if (!data) {
    //make components
    return (
      <section className="h-full w-full flex items-center flex-col justify-center gap-4">
        <h1 className={clsx(abeezee.className, 'text-2xl  ')}>
          <span> There seems to be a problem fetching your data.</span>
        </h1>
        <Link className="text-xl flex  gap-1 group text-blue-500" href={'/dashboard'}>
          <FaLongArrowAltLeft className="group-hover:-translate-x-1 duration-75 " size={30} />
          <span className="underline">Go back</span>
        </Link>
      </section>
    );
  }
  const renderChart = () => {
    switch (params) {
      case 'growthByYear':
        return <PopulationGrowthByYearChart data={data} />;
      case 'growthByRate':
        return <AnnualPopulationChart data={data} />;
    }
  };

  return (
    <section className={clsx('flex flex-col gap-5  h-full ')}>
      <hr />
      <div className="h-full flex gap-5 flex-col items-center   px-14 ">
        {data && <ChartNavigation id={id} />}
        {renderChart()}
      </div>
    </section>
  );
}
