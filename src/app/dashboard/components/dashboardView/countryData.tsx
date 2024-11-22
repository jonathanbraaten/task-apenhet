import RenderView from './renderView';
async function fetchData() {
  const response = await fetch(
    'https://api.worldbank.org/v2/country?format=json&region=EUU&per_page=10&page=1',
    { next: { revalidate: 0 } },
  );
  const data = await response.json();
  return data[1];
}

export default async function CountryData() {
  const countries = await fetchData();

  return <RenderView data={countries} />;
}
