import { useState } from 'react';

import { STEPS } from '../../../content/steps';
import { PLANS_PRICE, ADDONS_PRICE, AddonsName } from '../../../content/price';
import Footer from '../../Footer/Footer';
import { FormStepProps } from '../index';
import FormStyles from '../formStep.module.css';
import Styles from './summary.module.css';

const Summary = ({ formData, goto }: FormStepProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { plan, period, addOns } = formData;
  const multiplier = period === 'yearly' ? 10 : 1;
  const periodLabel = period === 'yearly' ? 'year' : 'month';

  let totalAmount = PLANS_PRICE[plan] * multiplier;

  const renderAddonPrice = (addOn: AddonsName) => {
    const addOnPrice = ADDONS_PRICE[addOn].price * multiplier;
    totalAmount += addOnPrice;
    return (
      <div key={addOn} className={Styles.valueRow}>
        <p className={Styles.label}>{addOn}</p>
        <p className={Styles.value}>₹{addOnPrice}</p>
      </div>
    );
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch('https://www.mocky.io/v2/5d9d9219310000153650e30b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) return res.json();
        else throw new Error(`Request Failed, ${res.status}`);
      })
      .then(({ result }) => {
        setLoading(false);
        if (result === 'success') goto((v) => v + 1);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <section className={FormStyles.formView}>
      <form className={FormStyles.form}>
        <div data-testid='summary'>
          <h2>Finishing Up</h2>
          <p className={Styles.subtext}>
            Double check everything before confirming
          </p>
          <div className={Styles.priceView}>
            <div className={`${Styles.valueRow} ${Styles.planPrice}`}>
              <div>
                <p>{`${plan}(${period})`}</p>
                <button
                  type='button'
                  className={Styles.changeBtn}
                  onClick={() =>
                    goto(Object.keys(STEPS).indexOf('Select Plan') + 1)
                  }
                >
                  Change
                </button>
              </div>
              <p>₹{PLANS_PRICE[plan] * multiplier}</p>
            </div>
            {!!addOns.length && (
              <div className={Styles.addonView}>
                {addOns.map(renderAddonPrice)}
              </div>
            )}
          </div>

          <div className={`${Styles.valueRow} ${Styles.totalView}`}>
            <p className={Styles.label}>{`Total(per ${periodLabel})`}</p>
            <p data-testid='total-amount' className={Styles.totalAmount}>
              ₹{totalAmount}
            </p>
          </div>
        </div>
      </form>
      <Footer
        isSubmitting={isLoading}
        position='last'
        handleBack={() => goto((v) => v - 1)}
        handleNext={handleSubmit}
      />
    </section>
  );
};

export default Summary;
