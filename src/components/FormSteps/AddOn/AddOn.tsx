import { ChangeEvent } from 'react';
import clsx from 'clsx';

import { ADDONS_PRICE, AddonsName } from '../../../content/price';
import Checkbox from '../../Checkbox/Checkbox';
import Styles from './addon.module.css';

export type AddOnState = {
  selected: { value: AddonsName[]; error: string };
};

interface AddOnProps {
  value: AddOnState;
  onChange: (indo: AddOnState) => void;
}

const Addon = ({ value: addOns, onChange }: AddOnProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked && addOns.selected) {
      const newValue = [...addOns.selected.value, name as AddonsName];
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
        {(Object.keys(ADDONS_PRICE) as Array<AddonsName>).map((addon) => (
          <label
            key={addon}
            data-testid={`${addon}-label`}
            className={clsx(Styles.labelCard, {
              [Styles.selected]: addOns.selected?.value?.includes(addon),
            })}
            htmlFor={`${addon}-service`}
          >
            <Checkbox
              data-testid={`${addon}-checkbox`}
              name={addon}
              onChange={handleChange}
              className={Styles.checkbox}
              id={`${addon}-service`}
              checked={addOns.selected?.value?.includes(addon)}
            />
            <div className={Styles.addonDetails}>
              <h3>{ADDONS_PRICE[addon].label}</h3>
              <p className={Styles.addonText}>{ADDONS_PRICE[addon].subText}</p>
            </div>
            <p className={Styles.price}>₹${ADDONS_PRICE[addon].price}/mo</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Addon;
