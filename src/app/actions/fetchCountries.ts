import { redirect } from 'next/navigation';
import { WorldBankAPIResponse } from '../types';

const revalidationTime = 3600;

async function initialResponse(): Promise<WorldBankAPIResponse> {
  try {
    const initialResponse = await fetch(
      `https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=15&page=1`,
      { next: { revalidate: revalidationTime } },
    );
    const data = await initialResponse.json();

    if (!Array.isArray(data) || data.length < 2) {
      throw new Error('Invalid API response');
    }
    const [metadata, firstPageData] = data as WorldBankAPIResponse;
    return [metadata, firstPageData];
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Unexpected error: ${typeof error}`);
  }
}

export async function fetchCountries({ page = 1 }): Promise<WorldBankAPIResponse> {
  if (!page || page < 1) {
    page = 1;
    redirect(`/dashboard?page=${page}`);
  }

  try {
    const response = await fetch(
      `https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=15&page=${page}`,
      { next: { revalidate: revalidationTime, tags: ['countries'] } },
    );
    const data = await response.json();

    if (!Array.isArray(data) || data.length < 2) {
      throw new Error('Invalid API response');
    }
    const [metadata, countries] = data as WorldBankAPIResponse;

    if (page > metadata.pages) {
      page = 1;
      redirect(`/dashboard?page=${page}`);
    }
    if (metadata.page > metadata.pages) {
      return await initialResponse();
    }
    return [metadata, countries];
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    return await initialResponse();
  }
}
