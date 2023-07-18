import { ChangeEvent } from 'react';
import clsx from 'clsx';

import { PLANS_PRICE, PlansName } from '../../../content/price';
import { Advanced, Arcade, Pro } from '../../Icons/Icons';
import Switch from '../../Switch/Switch';
import Styles from '../formStep.module.css';

export type SelectPlanState = {
  plan: { value: PlansName; error: string };
  period: { value: 'monthly' | 'yearly'; error: string };
};

interface SelectPlanProps {
  value: SelectPlanState;
  onChange: (info: SelectPlanState) => void;
}

const Icons = { advance: Advanced, arcade: Arcade, pro: Pro };

const SelectPlan = ({ value: selectPlan, onChange }: SelectPlanProps) => {
  const handlePlan = (selectedPlan: PlansName) => {
    onChange({
      ...selectPlan,
      ...{ plan: { value: selectedPlan, error: '' } },
    });
  };

  const isYearly = selectPlan?.period?.value === 'yearly';

  return (
    <div>
      <h2>Select your plan</h2>
      <p className={Styles.subtext}>
        You have option to select monthly or yearly plan
      </p>
      <div className={Styles.plansView}>
        {(Object.keys(PLANS_PRICE) as Array<PlansName>).map(
          (plan: PlansName) => {
            const PlanIcon = Icons[plan];
            return (
              <button
                key={plan}
                type='button'
                className={clsx(Styles.planCard, {
                  [Styles.selected]: selectPlan?.plan?.value === plan,
                })}
                onClick={() => handlePlan(plan)}
              >
                <PlanIcon />
                <div className={Styles.planDetails}>
                  <h3 className={Styles.planName}>{plan}</h3>
                  <p className={Styles.planPrice}>
                    {isYearly
                      ? `₹${PLANS_PRICE[plan] * 10}/year`
                      : `₹${PLANS_PRICE[plan]}/month`}
                  </p>
                  {isYearly && <p className={Styles.freeMsg}>2 months free</p>}
                </div>
              </button>
            );
          }
        )}
      </div>
      <div className={Styles.switchView}>
        <Switch
          checked={selectPlan?.period?.value === 'yearly'}
          offLabel='Monthly'
          onLabel='Yearly'
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const newPeriod = event.target.checked ? 'yearly' : 'monthly';
            onChange({
              ...selectPlan,
              ...{ period: { value: newPeriod, error: '' } },
            });
          }}
        />
      </div>
    </div>
  );
};

export default SelectPlan;
