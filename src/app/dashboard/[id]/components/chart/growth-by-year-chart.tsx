'use client';

import { PopulationData } from '@/app/types';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function PopulationGrowthByYearChart({ data }: { data: PopulationData[] }) {
  const formattedData = data
    .map(({ date, value }: { date: string; value: number }) => {
      return {
        date: date,
        population: value,
        uv: value,
        amt: value,
      };
    })
    .reverse();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="population" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="population"
          fill="#60a5fa"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
