import { fetchCountries } from '@/app/actions/actions';
import Wrapper from '@/app/components/wrapper';
import Link from 'next/link';

export default async function CountriesList() {
  const data = await fetchCountries();
  const region: string = data[0]?.region.value;
  return (
    <section className="flex flex-col gap-10 py-10">
      <Wrapper>
        <h1>{region}</h1>
      </Wrapper>
      <hr />

      <Wrapper>
        <ul id="country_list__grid">
          {data.map(({ id, name, capitalCity, incomeLevel }) => (
            <li
              className="flex flex-col  relative p-5 border rounded-md  hover:bg-gray-100 transition-colors duration-75"
              key={id}
            >
              <span>{name}</span>
              <span>Capital: {capitalCity}</span>
              <span>Income Level: {incomeLevel.value}</span>
              <Link className="absolute inset-0" href={`/dashboard/${id}`}></Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
