import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { Loader } from '../Icons/Icons';
import Styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  kind?: 'solid' | 'text';
  isLoading?: boolean;
}

const Button = ({
  className = '',
  children,
  variant = 'primary',
  kind = 'solid',
  isLoading = false,
  ...rest
}: ButtonProps) => {
  if (isLoading)
    return (
      <div className={clsx(Styles.loaderView, Styles[kind], className)}>
        <Loader className={Styles.loader} />
      </div>
    );
  return (
    <button
      className={clsx(Styles.button, Styles[variant], Styles[kind], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
