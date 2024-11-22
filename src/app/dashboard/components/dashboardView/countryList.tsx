export default function CountryList({ data, onClick }) {
  return (
    <section className="flex flex-col gap-10 py-10">
      <hr />

      <ul id="country_list__grid">
        {data.map(({ id, name, capitalCity, incomeLevel }) => (
          <li
            className="border relative rounded-md p-5 hover:bg-gray-100 transition-colors duration-75"
            key={id}
          >
            <p>{name}</p>
            <p>Capital: {capitalCity}</p>
            <p>Income Level: {incomeLevel.value}</p>
            <button onClick={() => onClick(id)}>click</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
