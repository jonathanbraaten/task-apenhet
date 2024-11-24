'use client';

import { abeezee } from '@/ui/fonts';
import clsx from 'clsx';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="grow flex justify-center items-center">
      <div className="flex justify-center flex-col gap-5">
        <h1 className={clsx(abeezee.className, 'text-2xl ')}> Something went wrong</h1>
        <button
          className="text-1xl  bg-black text-white py-2 px-5 self-center rounded-md"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </section>
  );
}
