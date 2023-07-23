import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

import Styles from './switch.module.css';

interface SwitchProps extends InputHTMLAttributes<HTMLElement> {
  className?: string;
  offLabel?: string;
  onLabel?: string;
}

const Switch = ({
  id = Math.random().toString(36).substring(2, 9),
  offLabel = 'Off',
  onLabel = 'On',
  className = '',
  ...props
}: SwitchProps) => {
  return (
    <label
      tabIndex={0}
      htmlFor={id}
      className={clsx(Styles.wrapper, className)}
    >
      {offLabel}
      <input
        data-testid='switch'
        className={Styles.input}
        id={id}
        type='checkbox'
        {...props}
      />
      <span className={Styles.slider}></span>
      {onLabel}
    </label>
  );
};

export default Switch;
