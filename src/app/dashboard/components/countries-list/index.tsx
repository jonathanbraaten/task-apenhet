import { fetchCountries } from '@/app/actions/fetchCountries';
import Wrapper from '@/app/components/wrapper';
import { abeezee } from '@/ui/fonts';
import clsx from 'clsx';

import Pagination from './pagination';
import CountriesCard from './countries-card';
import Attribution from '@/app/components/attribution';

export default async function CountriesList({ page }: { page: number }) {
  const [metadata, data] = await fetchCountries({ page });
  const region = data[0]?.region.value || 'No region provided';

  return (
    <section className={clsx('flex flex-col py-10 h-full ')}>
      <Wrapper optionalStyle="flex justify-between items-center">
        <h1 className={clsx(abeezee.className, 'text-2xl py-5')}>
          Historical populations and growth rate for the countries in {region}
        </h1>
      </Wrapper>
      <hr />
      <Wrapper>
        <div className="flex justify-end">
          <Pagination totalPages={metadata.pages} />
        </div>

        <ul className="country_list__grid">
          {data.map(({ id, name, capitalCity, iso2Code }) => (
            <CountriesCard
              key={id}
              id={id}
              name={name}
              capitalCity={capitalCity}
              iso2Code={iso2Code}
            />
          ))}
        </ul>
      </Wrapper>

      <Attribution />
    </section>
  );
}
