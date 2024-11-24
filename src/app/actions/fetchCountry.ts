import { PopulationData } from '../types';

export async function fetchCountry(id: string, revalidate = 3600): Promise<PopulationData[]> {
  const storage = [];
  const initialFetch = await fetch(
    `https://api.worldbank.org/v2/country/${id}/indicator/SP.POP.TOTL?format=json`,
    {
      next: { revalidate: revalidate },
    },
  );
  const [metadata] = await initialFetch.json();
  const meta = { ...metadata };
  meta.page = 0;
  while (meta.page < meta.pages) {
    ++meta.page;
    const response = await fetch(
      `https://api.worldbank.org/v2/country/${id}/indicator/SP.POP.TOTL?format=json&page=${meta.page}`,
      {
        cache: 'force-cache',
      },
    );
    const [, data] = await response.json();
    storage.push(...data);
  }
  return storage;
}
