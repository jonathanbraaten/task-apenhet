import { fetchCountries } from '@/app/actions/actions';
import Wrapper from '@/app/components/wrapper';
import { abeezee } from '@/ui/fonts';
import clsx from 'clsx';
import styles from './style.module.css';
import Pagination from './pagination';
import CountriesCard from './countries-card';
import CountriesNav from './countries-nav';

export default async function CountriesList({ page }: { page: number }) {
  const [metadata, data] = await fetchCountries({ page });
  const region = data[0]?.region.value || 'No region provided';

  for (const countries of data) {
    /*     console.log(countries['id']);
    console.log(countries['name']); */
    const test = countries['name'].substring(0, 3);
    console.log(test);
  }
  return (
    <section className={clsx(styles.background_pattern, 'flex flex-col py-10 h-full ')}>
      <Wrapper optionalStyle="flex justify-between items-center">
        <h1 className={clsx(abeezee.className, 'text-2xl py-5')}>
          Historical populations and growth rate for the countries in {region}
        </h1>
      </Wrapper>
      <hr />

      <Wrapper>
        <CountriesNav>
          <Pagination totalPages={metadata.pages} />
        </CountriesNav>
        <ul id="country_list__grid">
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
    </section>
  );
}
