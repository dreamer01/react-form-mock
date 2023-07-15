import { ChangeEvent } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import Styles from './addon.module.css';
import clsx from 'clsx';

export type AddOnState = {
  selected: { value: string[]; error: string };
};

interface AddOnProps {
  value: AddOnState;
  onChange: (indo: AddOnState) => void;
}

const Addon = ({ value: addOns, onChange }: AddOnProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked && addOns.selected) {
      const newValue = [...addOns.selected.value, name];
      onChange({
        selected: { value: newValue, error: '' },
      });
    } else {
      const newValue = addOns.selected?.value.filter((v) => v !== name);
      onChange({ selected: { value: newValue, error: '' } });
    }
  };

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p className={Styles.subtext}>Add ons helps you get better experience</p>

      <div className={Styles.cardView}>
        <label
          data-testid='online-label'
          className={clsx(Styles.labelCard, {
            [Styles.selected]: addOns.selected?.value?.includes('online'),
          })}
          htmlFor='online-service'
        >
          <Checkbox
            data-testid='online-checkbox'
            name='online'
            onChange={handleChange}
            className={Styles.checkbox}
            id='online-service'
          />
          <div className={Styles.addonDetails}>
            <h3>Online Service</h3>
            <p className={Styles.addonText}>
              Access to other users and their projects
            </p>
          </div>
          <p className={Styles.price}>₹49/mo</p>
        </label>
        <label
          data-testid='storage-label'
          className={clsx(Styles.labelCard, {
            [Styles.selected]: addOns.selected?.value?.includes('storage'),
          })}
          htmlFor='storage'
        >
          <Checkbox
            name='storage'
            onChange={handleChange}
            className={Styles.checkbox}
            id='storage'
          />
          <div className={Styles.addonDetails}>
            <h3>Larger Storage</h3>
            <p className={Styles.addonText}>
              Extra 1TB of the cloud save for backups.
            </p>
          </div>
          <p className={Styles.price}>₹49/mo</p>
        </label>
        <label
          data-testid='customization-label'
          className={clsx(Styles.labelCard, {
            [Styles.selected]:
              addOns.selected?.value?.includes('customization'),
          })}
          htmlFor='customization'
        >
          <Checkbox
            name='customization'
            onChange={handleChange}
            className={Styles.checkbox}
            id='customization'
          />
          <div className={Styles.addonDetails}>
            <h3>Customization</h3>
            <p className={Styles.addonText}>
              Custom profile theme and app experience
            </p>
          </div>
          <p className={Styles.price}>₹29/mo</p>
        </label>
      </div>
    </div>
  );
};

export default Addon;
