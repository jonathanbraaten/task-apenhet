'use server';
import { PopulationData, WorldBankAPIResponse } from '../types';

const revalidationTime = 3600;
async function initialResponse(): Promise<WorldBankAPIResponse> {
  try {
    const initialResponse = await fetch(
      `https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=15&page=1`,
      { next: { revalidate: revalidationTime } },
    );
    const data = await initialResponse.json();

    if (!Array.isArray(data) || data.length < 2) {
      throw new Error('Invalid API response format');
    }
    const [metadata, firstPageData] = data as WorldBankAPIResponse;
    return [metadata, firstPageData];
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
}

export async function fetchCountries({ page = 1 }): Promise<WorldBankAPIResponse> {
  if (!page || page < 1) {
    page = 1;
  }

  try {
    const response = await fetch(
      `https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=15&page=${page}`,
      { next: { revalidate: revalidationTime, tags: ['countries'] } },
    );
    const [metadata, data] = await response.json();

    if (page > metadata.pages) {
      page = 1;
    }
    if (metadata.page > metadata.pages) {
      return await initialResponse();
    }
    return [metadata, data];
  } catch (error) {
    return await initialResponse();
  }
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
