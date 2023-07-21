import { Thanks as ThanksIcon } from '../../Icons/Icons';
import { FormStepProps } from '../index';
import Styles from './thanks.module.css';

const Thanks = ({ formData }: FormStepProps) => {
  return (
    <div className={Styles.wrapper}>
      <ThanksIcon className={Styles.icon} />
      <h1>Thank You</h1>

      <p className={Styles.subtext}>
        Welcome to the Gamin, we are thrilled to have as a premium customer.{' '}
        <strong>{formData.name}</strong>, lets enjoy this ride with an enhanced
        experience curated especially for you.
      </p>
    </div>
  );
};

export default Thanks;
