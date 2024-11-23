import clsx from 'clsx';
type Props = {
  optionalStyle?: string;
  children: React.ReactNode;
};

export default function Wrapper({ optionalStyle, children }: Props) {
  return <div className={clsx(optionalStyle, 'px-12')}>{children}</div>;
}
