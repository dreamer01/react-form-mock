import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import Styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLElement>;

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      data-testid='input'
      className={clsx(Styles.input, className)}
      {...rest}
    />
  );
};

export default Input;
