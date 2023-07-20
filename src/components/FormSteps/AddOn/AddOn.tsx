import { ChangeEvent } from 'react';
import clsx from 'clsx';

import { ADDONS_PRICE, AddonsName } from '../../../content/price';
import Checkbox from '../../Checkbox/Checkbox';
import Footer from '../../Footer/Footer';
import { FormStepProps } from '../index';
import FormStyles from '../formStep.module.css';
import Styles from './addon.module.css';

const Addon = ({ formData, setFormData, goto }: FormStepProps) => {
  const { addOns, period } = formData;
  const multiplier = period === 'yearly' ? 10 : 1;
  const pricePeriod = period === 'yearly' ? 'yr' : 'mo';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        addOns: [...addOns, name],
      });
    } else {
      const updatedAddOns = addOns.filter((v) => v !== name);
      setFormData({
        ...formData,
        addOns: [...updatedAddOns],
      });
    }
  };

  return (
    <section className={FormStyles.formView}>
      <form className={FormStyles.form}>
        <div>
          <h2>Pick add-ons</h2>
          <p className={Styles.subtext}>
            Add ons helps you get better experience
          </p>

          <div className={Styles.cardView}>
            {(Object.keys(ADDONS_PRICE) as Array<AddonsName>).map((addon) => (
              <label
                key={addon}
                data-testid={`${addon}-label`}
                className={clsx(Styles.labelCard, {
                  [Styles.selected]: addOns.includes(addon),
                })}
                htmlFor={`${addon}-service`}
              >
                <Checkbox
                  data-testid={`${addon}-checkbox`}
                  name={addon}
                  onChange={handleChange}
                  className={Styles.checkbox}
                  id={`${addon}-service`}
                  checked={addOns.includes(addon)}
                />
                <div className={Styles.addonDetails}>
                  <h3>{ADDONS_PRICE[addon].label}</h3>
                  <p className={Styles.addonText}>
                    {ADDONS_PRICE[addon].subText}
                  </p>
                </div>
                <p className={Styles.price}>
                  ₹{ADDONS_PRICE[addon].price * multiplier}/{pricePeriod}
                </p>
              </label>
            ))}
          </div>
        </div>
      </form>
      <Footer
        handleBack={() => goto((v) => v - 1)}
        handleNext={() => goto((v) => v + 1)}
      />
    </section>
  );
};

export default Addon;
