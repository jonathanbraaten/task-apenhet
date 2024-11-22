type Props = {
  id: string;
  onClick: () => void;
};

export default function Chart({ id, onClick }: Props) {
  console.log(id, ' in Chart');
  return (
    <>
      <p onClick={onClick}>Go back</p>
      <h1>Chart</h1>
    </>
  );
}
