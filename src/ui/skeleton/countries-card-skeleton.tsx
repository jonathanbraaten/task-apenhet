import Wrapper from '@/app/components/wrapper';
import { createArray } from '@/utils/createArray';
import clsx from 'clsx';
import styles from './style.module.css';
import { abeezee } from '@/ui/fonts';

export default function CountriesCardSkeleton({ limit = 5 }: { limit?: number }) {
  const skeletons = createArray(limit);

  return (
    <section className={clsx('flex flex-col gap-10 py-10 h-full ')}>
      <Wrapper>
        <div className={clsx(abeezee.className, 'text-2xl')}>
          <div className="h-8 w-32 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </Wrapper>
      <hr />

      <Wrapper>
        <ul id="country_list__grid">
          {skeletons.map((_, index) => (
            <li
              key={index}
              className="flex flex-col gap-3 px-5 pt-5 bg-red-500 pb-10 border rounded-md hover:bg-gray-100 transition-colors duration-75"
            >
              <div className="h-6 w-full flex justify-between ">
                <span className="h-6 w-2/5  bg-gray-400  animate-pulse rounded"></span>
                <span className="h-6 w-6  bg-gray-400  animate-pulse  rounded-full"></span>
              </div>
              <div className="h-5 w-1/2 bg-gray-400 animate-pulse rounded"></div>
              <div className="h-5 w-2/3 bg-gray-400 animate-pulse rounded"></div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}

//bg-gray-200 bg-black
