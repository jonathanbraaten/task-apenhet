'use client';

import { useState } from 'react';
import CountryList from './countryList';
import Chart from './chart';
import { Country } from '@/app/types';

type Props = {
  data: Country[];
};
type Views = 'list' | 'chart';
export default function RenderView({ data }: Props) {
  const [currentView, setCurrentView] = useState<Views>('list');
  const [selectedId, setSelectedId] = useState<string>('');

  const displayChart = (id: string) => {
    setCurrentView('chart');
    setSelectedId(id);
  };
  const displayList = () => setCurrentView('list');

  const renderView = () => {
    switch (currentView) {
      case 'list':
        return <CountryList onClick={displayChart} data={data} />;

      case 'chart':
        return <Chart id={selectedId} onClick={displayList} />;
      default:
        return null;
    }
  };
  return renderView();
}
