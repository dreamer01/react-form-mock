import clsx from 'clsx';

import Styles from './steps.module.css';

interface StepProps {
  label: string;
  position: number;
  active: boolean;
  onSelect?: (position: number) => void;
}

const Step = ({ position, label, active, onSelect }: StepProps) => {
  return (
    <button
      data-testid='step-component'
      onClick={() => onSelect && onSelect(position)}
      className={Styles.stepView}
    >
      <span className={clsx(Styles.stepCount, { [Styles.active]: active })}>
        {position}
      </span>
      <div className={Styles.stepdetails}>
        <p className={Styles.position}>Step {position}</p>
        <p className={Styles.label}>{label}</p>
      </div>
    </button>
  );
};

export default Step;
