import { ABeeZee, Montserrat } from 'next/font/google';

const abeezee = ABeeZee({
  weight: '400',
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
});
const montserrat = Montserrat({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: ['normal'],
});

export { abeezee, montserrat };
