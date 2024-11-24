import RenderCountries from './components/render-countries';

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page);

  return (
    <section className="grow">
      <RenderCountries page={currentPage} />
    </section>
  );
}
