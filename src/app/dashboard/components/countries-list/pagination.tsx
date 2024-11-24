'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const [pageNum, setPageNum] = useState(1);
  const router = useRouter();

  const handlePaginatePrev = async () => {
    if (pageNum > 1) {
      const newPage = pageNum - 1;
      setPageNum(newPage);
      router.push(`?page=${newPage}`);
    }
  };

  const handlePaginateNext = async () => {
    if (pageNum < totalPages) {
      const newPage = pageNum + 1;
      setPageNum(newPage);
      router.push(`?page=${newPage}`);
    }
  };

  return (
    <div className="flex gap-5 py-5">
      <button
        onClick={() => handlePaginatePrev()}
        className={clsx('bg-black text-white rounded-full', {
          'bg-red-500 cursor-not-allowed': pageNum <= 1,
        })}
      >
        <MdKeyboardArrowLeft size={35} />
      </button>
      <button
        onClick={() => handlePaginateNext()}
        className={clsx('bg-black text-white rounded-full', {
          'bg-red-500 cursor-not-allowed': pageNum >= totalPages,
        })}
      >
        {' '}
        <MdKeyboardArrowRight size={35} />
      </button>
    </div>
  );
}
