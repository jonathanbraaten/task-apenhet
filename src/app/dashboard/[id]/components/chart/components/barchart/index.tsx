'use client';

import { Country } from '@/app/types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function PopulationChart({ data }: { data: Country }) {
  const formattedData: Country[] = data
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
      <BarChart width={1200} height={500} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="population" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
