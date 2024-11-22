import { Country } from '@/app/types';
import Wrapper from './wrapper';

type Props = {
  data: Country[];
  onClick: (arg: string) => void;
};

export default function CountryList({ data, onClick }: Props) {
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
              className="border rounded-md  hover:bg-gray-100 transition-colors duration-75"
              key={id}
            >
              <button
                className="inline-flex flex-col p-5  items-center"
                onClick={() => onClick(id)}
              >
                <span>{name}</span>
                <span>Capital: {capitalCity}</span>
                <span>Income Level: {incomeLevel.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
