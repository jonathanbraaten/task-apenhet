'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Pagination({ totalPages }) {
  const [pageNum, setPageNum] = useState(1);
  const [paginateNext, setPaginateNext] = useState(false);
  const [paginatePrev, setPaginatePrev] = useState(false);
  const router = useRouter();
  const test = async () => {
    setPageNum((prev) => prev + 1);
    console.log(pageNum, 'usestate');
    if (pageNum <= totalPages) {
      router.push(`?page=${pageNum}`);
    } else {
      return;
    }
  };
  return <button onClick={() => test()}>hola</button>;
}
