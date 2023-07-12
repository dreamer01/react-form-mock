import { InputHTMLAttributes } from 'react';

import Styles from './checkbox.module.css';

type CheckboxProps = InputHTMLAttributes<HTMLElement>;

const Checkbox = (props: CheckboxProps) => {
  return <input type='checkbox' {...props} />;
};

export default Checkbox;
