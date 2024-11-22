type Props = {
  id: string;
  onClick: () => void;
};

export default function Chart({ id, onClick }: Props) {
  console.log(id, ' in Chart');
  return (
    <section>
      <button onClick={onClick}>Go back</button>
      <h1>Chart</h1>
    </section>
  );
}
