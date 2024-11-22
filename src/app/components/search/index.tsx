'use client';
export default function Search() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <header id="dashboard-search" className="bg-purple-100 flex items-center  justify-center">
      <form onSubmit={handleSubmit} className="max-w-4xl w-full">
        <label htmlFor="search" className="grow">
          <span className="sr-only"> Search</span>
          <input
            className="w-full py-2 pl-4 rounded-md border"
            placeholder="Search..."
            type="text"
            name="search"
            id="search"
          />
        </label>
      </form>
    </header>
  );
}
