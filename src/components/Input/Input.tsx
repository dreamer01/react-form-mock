import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';
import clsx from 'clsx';

import Styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef(
  (
    { className = '', label, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <>
        <div className={Styles.labelView}>
          <label className={Styles.label} htmlFor={props.id}>
            {label}
          </label>
          {error && <p className={Styles.error}>{error}</p>}
        </div>
        <input
          ref={ref}
          data-testid='input'
          className={clsx(Styles.input, { [Styles.error]: error }, className)}
          {...props}
        />
      </>
    );
  }
);

export default Input;
