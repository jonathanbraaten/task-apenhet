import { fetchCountry } from '@/app/actions/actions';
import PopulationChart from './bar-chart';

export default async function Chart({ id }: { id: string }) {
  const data = await fetchCountry(id);
  return (
    <section className=" h-full overflow-hidden">
      <div className="h-full flex items-center px-12">
        <PopulationChart data={data} />
      </div>
    </section>
  );
}
