'use server';

import { Countries, PopulationData } from '../types';

export async function fetchCountries(): Promise<Countries[]> {
  const response = await fetch(
    'https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=10&page=1',
    { next: { revalidate: 0 } },
  );
  const data = await response.json();
  return data[1];
}

export async function fetchCountry(id: string): Promise<PopulationData[]> {
  const response = await fetch(
    `https://api.worldbank.org/v2/country/${id}/indicator/SP.POP.TOTL?format=json`,
    {
      next: { revalidate: 0 },
    },
  );
  const data = await response.json();
  return data[1];
}