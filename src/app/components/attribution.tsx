import Link from 'next/link';

export default function Attribution() {
  return (
    <>
      <p className="mt-2   text-end text-xs absolute right-5 bottom-2">
        <Link
          className="text-blue-700 underline"
          href="https://www.worldbank.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          World Bank
        </Link>
        <span> - Data provided via their </span>
        <Link href="https://api.worldbank.org/" rel="noopener noreferrer" target="_blank">
          public API
        </Link>
      </p>
    </>
  );
}
