import { ChangeEvent } from 'react';
import clsx from 'clsx';

import { PLANS_PRICE, PlansName } from '../../../content/price';
import { Advanced, Arcade, Pro } from '../../Icons/Icons';
import { FormStepProps } from '../index';
import Switch from '../../Switch/Switch';
import Footer from '../../Footer/Footer';
import FormStyles from '../formStep.module.css';
import Styles from './selectplan.module.css';

const Icons = { advance: Advanced, arcade: Arcade, pro: Pro };

const SelectPlan = ({ goto, formData, setFormData }: FormStepProps) => {
  const { plan, period } = formData;

  const handlePlan = (newPlan: PlansName) => {
    setFormData({
      ...formData,
      plan: newPlan,
    });
  };

  const isYearly = period === 'yearly';

  return (
    <section className={FormStyles.formView}>
      <form className={FormStyles.form}>
        <div>
          <h2>Select your plan</h2>
          <p className={Styles.subtext}>
            You have option to select monthly or yearly plan
          </p>
          <div className={Styles.plansView}>
            {(Object.keys(PLANS_PRICE) as Array<PlansName>).map(
              (planName: PlansName) => {
                const PlanIcon = Icons[planName];
                return (
                  <button
                    key={planName}
                    type='button'
                    className={clsx(Styles.planCard, {
                      [Styles.selected]: plan === planName,
                    })}
                    onClick={() => handlePlan(planName)}
                  >
                    <PlanIcon />
                    <div className={Styles.planDetails}>
                      <h3 className={Styles.planName}>{planName}</h3>
                      <p className={Styles.planPrice}>
                        {isYearly
                          ? `₹${PLANS_PRICE[planName] * 10}/year`
                          : `₹${PLANS_PRICE[planName]}/month`}
                      </p>
                      {isYearly && (
                        <p className={Styles.freeMsg}>2 months free</p>
                      )}
                    </div>
                  </button>
                );
              }
            )}
          </div>
          <div className={Styles.switchView}>
            <Switch
              checked={period === 'yearly'}
              offLabel='Monthly'
              onLabel='Yearly'
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const newPeriod = event.target.checked ? 'yearly' : 'monthly';
                setFormData({
                  ...formData,
                  period: newPeriod,
                });
              }}
            />
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

export default SelectPlan;
