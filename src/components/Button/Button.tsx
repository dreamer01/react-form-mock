import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import Styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  kind?: 'solid' | 'text';
}

const Button = ({
  children,
  variant = 'primary',
  kind = 'solid',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(Styles.button, Styles[variant], Styles[kind])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
