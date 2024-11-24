import { fetchCountry } from '@/app/actions/actions';
import PopulationChart from './bar-chart';
import LineChartRate from './line-chart-rate';
import Wrapper from '@/app/components/wrapper';
import clsx from 'clsx';
import Image from 'next/image';
import { abeezee } from '@/ui/fonts';

export default async function Chart({ id }: { id: string }) {
  const data = await fetchCountry(id);
  const countryName = data[0]?.country.value || 'No name';
  const countryId = data[0].country.id || 0;

  return (
    <section className={clsx('flex flex-col gap-10 py-10 h-full ')}>
      <Wrapper>
        <div className="flex items-center gap-2">
          <h1 className={clsx(abeezee.className, 'text-2xl')}>{countryName}</h1>
          <Image
            src={`https://flagsapi.com/${countryId}/flat/64.png`}
            alt={`Image of flag for country with iso2code: ${countryId}`}
            width={50}
            height={50}
            quality={100}
            priority={true}
            className="aspect-square p-2"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </div>
      </Wrapper>
      <hr />
      <div className="h-full flex items-center px-12">
        <LineChartRate data={data} />
        <PopulationChart data={data} />
      </div>
    </section>
  );
}
