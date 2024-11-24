import CountryView from './components/country-view';
import { fetchCountry } from '@/app/actions/actions';
import { abeezee } from '@/ui/fonts';
import clsx from 'clsx';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Link from 'next/link';
export default async function CountryPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { chart = 'growthByYear' } = await searchParams;
  const chartState = chart === 'growthByYear' || chart === 'growthByRate' ? chart : 'growthByYear';
  const data = await fetchCountry(id, 7200);
  const countryName = data[0]?.country.value || 'No name';
  return (
    <section className="grow">
      <header className="flex items-center  px-14 h-[5rem] ">
        <Link
          className="bg-black  font-medium text-md  rounded-full  items-center hover:bg-black/90 duration-75 "
          href={'/dashboard'}
        >
          <FaLongArrowAltLeft size={30} className="p-1 w-[2.1rem] h-[2.1rem] text-white" />
        </Link>
        <h1 className={clsx(abeezee.className, 'text-2xl mx-auto')}>{countryName}</h1>
      </header>

      <CountryView params={chartState} id={id} />
    </section>
  );
}
