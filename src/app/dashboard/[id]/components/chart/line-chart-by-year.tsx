'use client';

import { PopulationData } from '@/app/types';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function LineChartByYear({ data }: { data: PopulationData[] }) {
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
      <LineChart
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
        <YAxis
          style={{
            fontSize: 15,
          }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="population" stroke="#28d886" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="date" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
