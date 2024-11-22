'use server';
export async function getCountries() {
  const response = await fetch(
    'https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=10&page=1',
    { next: { revalidate: 3600 } }, // Cache for 1 hour
  );
  const data = await response.json();
  return data[1];
}
