'use client';
import { generateChartParams } from '@/utils/generateChartParams';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ChartNavigation({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const search = searchParams.get('chart');

  return (
    <nav className="text-md font-medium" id="chart-navigation">
      <ul className=" flex items-center gap-4">
        <li>
          <Link
            className={clsx('flex items-center rounded-md px-2 p-1 bg-blue-200', {
              'bg-blue-400': search === 'growthByYear',
            })}
            href={`/dashboard/${id}?${generateChartParams('growthByYear')}`}
          >
            {' '}
            <span>Population</span>
          </Link>
        </li>
        <li>
          <Link
            className={clsx('flex items-center rounded-md px-2 p-1 bg-blue-200 ', {
              'bg-blue-400': search === 'growthByRate',
            })}
            href={`/dashboard/${id}?${generateChartParams('growthByRate')}`}
          >
            {' '}
            <span>Annual population growth</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
