import { Link } from 'react-router-dom';

import type { SVGProps } from 'react';

import AvocadoSvg from '@/shared/assets/icons/avocado.svg';

export const Logo = (properties: SVGProps<SVGElement>): JSX.Element => {
  return (
    <Link to="/">
      <AvocadoSvg {...properties} />
    </Link>
  );
};
