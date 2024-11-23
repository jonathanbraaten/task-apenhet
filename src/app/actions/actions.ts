'use server';

import { Countries, PopulationData } from '../types';

export async function fetchCountries({ page = '1' }): Promise<Countries[]> {
  let pages = Number(page);
  if (!pages || pages < 1) {
    pages = 1;
  }

  const response = await fetch(
    `https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=15&page=${String(pages)}`,
    { next: { revalidate: 3600 } },
  );
  const [metadata, data] = await response.json();

  if (metadata.page > metadata.pages) {
    const firstPageResponse = await fetch(
      `https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=15&page=1`,
      { next: { revalidate: 3600 } },
    );
    const [, firstPageData] = await firstPageResponse.json();
    return firstPageData;
  }
  return [metadata, data];
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
