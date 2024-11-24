'use client';

import { PopulationData } from '@/app/types';
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

export default function PopulationBarChart({ data }: { data: PopulationData[] }) {
  const formattedData = data
    .map(({ date, value }: { date: string; value: number }) => {
      return {
        name: date,
        population: value,
        uv: value,
        amt: value,
      };
    })
    .reverse();

  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="population" fill="#8884d8" />
        <Bar dataKey="growthRate" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
