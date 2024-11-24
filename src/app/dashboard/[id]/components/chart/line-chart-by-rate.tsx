'use client';
import { PopulationData } from '@/app/types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function LineChartByRate({ data }: { data: PopulationData[] }) {
  const growthRateByYear = data
    .map((item, i) => {
      if (i === data.length - 1) return { ...item, growth: null };
      const currentPopulation = item.value;
      const previousPopulation = data[i + 1].value;
      const growth = ((currentPopulation - previousPopulation) / previousPopulation) * 100;
      return {
        ...item,
        'Population growth': growth,
      };
    })
    .reverse();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={growthRateByYear}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Population growth" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/*   <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
