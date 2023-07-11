import { ChangeEvent } from 'react';
import clsx from 'clsx';

import Switch from '../../Switch/Switch';
import { Advanced, Arcade, Pro } from '../../Icons/Icons';
import Styles from '../formStep.module.css';

type Plans = 'arcade' | 'advance' | 'pro';

export type SelectPlanState = {
  plan: { value: Plans; error: string };
  period: { value: 'monthly' | 'yearly'; error: string };
};

interface SelectPlanProps {
  value: SelectPlanState;
  onChange: (info: SelectPlanState) => void;
}

const SelectPlan = ({ value: selectPlan, onChange }: SelectPlanProps) => {
  const handlePlan = (selectedPlan: Plans) => {
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
        <button
          type='button'
          className={clsx(Styles.planCard, {
            [Styles.selected]: selectPlan?.plan?.value === 'arcade',
          })}
          onClick={() => handlePlan('arcade')}
        >
          <Arcade />
          <div className={Styles.planDetails}>
            <h3>Arcade</h3>
            <p className={Styles.planPrice}>
              {isYearly ? '₹990/year' : '₹99/month'}
            </p>
            {isYearly && <p className={Styles.freeMsg}>2 months free</p>}
          </div>
        </button>
        <button
          type='button'
          className={clsx(Styles.planCard, {
            [Styles.selected]: selectPlan?.plan?.value === 'advance',
          })}
          onClick={() => handlePlan('advance')}
        >
          <Advanced />
          <div className={Styles.planDetails}>
            <h3>Advance</h3>
            <p className={Styles.planPrice}>
              {isYearly ? '₹1990/year' : '₹199/month'}
            </p>
            {isYearly && <p className={Styles.freeMsg}>2 months free</p>}
          </div>
        </button>
        <button
          type='button'
          className={clsx(Styles.planCard, {
            [Styles.selected]: selectPlan?.plan?.value === 'pro',
          })}
          onClick={() => handlePlan('pro')}
        >
          <Pro />
          <div className={Styles.planDetails}>
            <h3>Pro</h3>
            <p className={Styles.planPrice}>
              {isYearly ? '₹2990/year' : '₹299/month'}
            </p>
            {isYearly && <p className={Styles.freeMsg}>2 months free</p>}
          </div>
        </button>
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
