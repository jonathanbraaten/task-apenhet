import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { montserrat } from '@/ui/fonts';
import { Countries } from '@/app/types';

type Props = Pick<Countries, 'id' | 'iso2Code' | 'capitalCity' | 'name'>;
export default function CountriesCard({ id, iso2Code, capitalCity, name }: Props) {
  return (
    <li
      className="flex flex-col  group relative p-5 border rounded-md focus:bg-gray-100 active:bg-gray-100  hover:bg-gray-100 transition-colors duration-75"
      key={id}
    >
      <div className="flex justify-between items-center">
        <h2 className={clsx(montserrat.className, 'text-lg font-medium')}>{name}</h2>
        <div className="max-w-[2.5rem] bg-slate-200  border-2 rounded-full">
          <Image
            src={`https://flagsapi.com/${iso2Code}/flat/64.png`}
            alt={`Image of flag for country with iso2code: ${iso2Code}`}
            width={50}
            height={50}
            quality={100}
            priority={true}
            className="aspect-square p-2"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col my-2">
        <p>
          <span>Capital:</span> {capitalCity}
        </p>
      </div>

      <div className=" opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity">
        <span className="text-black">View details →</span>
      </div>

      <Link className="absolute inset-0" href={`/dashboard/${id}?chart=growthByYear`}>
        <span className="sr-only">View details for {name}</span>
      </Link>
    </li>
  );
}
