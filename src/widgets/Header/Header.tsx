import { clsx } from 'clsx';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Logo } from '@/shared/ui/Logo';

import classes from './Header.module.scss';

export const Header = (): JSX.Element => {
  const innerContainerClasses = clsx('container', classes['inner-container']);

  return (
    <header className={classes['header']}>
      <div className={innerContainerClasses}>
        <Logo width={40} height={40} />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
