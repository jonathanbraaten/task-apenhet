import { useEffect, useState } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import Wrapper from './wrapper';
import { Country } from '@/app/types';

type Props = {
  id: string;
  onClick: () => void;
};
function PopulationChart({ data }: { data: Country[] }) {
  if (!data || data.length < 2 || !data[1]) {
    return <div className="p-4">No data available</div>;
  }

  const formattedData = data[1]
    .map(({ date, value }: { date: string; value: string }) => {
      return {
        name: date,
        population: value,
        uv: value,
        amt: value,
      };
    })
    .reverse();

  return (
    <ResponsiveContainer height="80%">
      <BarChart
        width={1200}
        height={500}
        data={formattedData}
        /*      margin={{ top: 5, right: 30, left: 20, bottom: 5 }} */
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="population" fill="#8884d8" />
        {/*    <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
export default function Chart({ id, onClick }: Props) {
  const [country, setCountry] = useState<Country[]>([]);
  /*   const countryName: string = country[1][0]?.country.value; */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.worldbank.org/v2/country/${id}/indicator/SP.POP.TOTL?format=json`,
        );
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        throw new Error('');
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className=" h-full overflow-hidden">
      <Wrapper>
        <button onClick={onClick}>Go back</button>
        <h1> {(country && country[1] && country[1][0]?.country?.value) || 'No data available'}</h1>
      </Wrapper>

      <div className="h-full flex items-center px-12">
        <PopulationChart data={country} />
      </div>
    </section>
  );
}
