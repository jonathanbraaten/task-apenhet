import { fetchCountries } from '@/app/actions/actions';
import Wrapper from '@/app/components/wrapper';
import { abeezee, montserrat } from '@/ui/fonts';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './style.module.css';
import Pagination from './pagination';

export default async function CountriesList({ page }: { page: string }) {
  const [metadata, data] = await fetchCountries({ page });
  /*   const region: string = data?.region.value || 'No region provided';
   */

  return (
    <section className={clsx(styles.background_pattern, 'flex flex-col gap-10 py-10 h-full ')}>
      <Pagination totalPages={metadata.pages} />
      <Wrapper>
        {/*         <h1 className={clsx(abeezee.className, 'text-2xl')}>{region}</h1>
         */}{' '}
      </Wrapper>
      <hr />

      <Wrapper>
        <ul id="country_list__grid">
          {data.map(({ id, name, capitalCity, iso2Code, incomeLevel }) => (
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
                <p>
                  <span>Income Level:</span> {incomeLevel.value}
                </p>
              </div>

              <div className=" opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity">
                <span className="text-black">View details →</span>
              </div>

              <Link className="absolute inset-0" href={`/dashboard/${id}`}>
                <span className="sr-only">View details for {name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
