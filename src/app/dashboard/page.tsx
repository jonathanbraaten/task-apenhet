import CountriesView from './components/countries-view';

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page = 1 } = await searchParams;
  const currentPage = Number(page);

  return (
    <section className="grow">
      <CountriesView page={currentPage} />
    </section>
  );
}
