import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLElement>;

const Checkbox = (props: CheckboxProps) => {
  return <input type='checkbox' {...props} />;
};

export default Checkbox;
