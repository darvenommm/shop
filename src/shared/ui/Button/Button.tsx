import { clsx } from 'clsx';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import classes from './Button.module.scss';

interface IButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
}

export const Button = (properties: IButtonProperties): JSX.Element => {
  const { isActive = false, children, ...otherProperties } = properties;

  const buttonClasses = clsx(
    classes['button'],
    isActive && classes['active-button'],
  );

  return (
    <button className={buttonClasses} {...otherProperties}>
      {children}
    </button>
  );
};
