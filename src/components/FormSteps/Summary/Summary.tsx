import { FormData } from '../../../../src/App';
import { STEPS } from '../../../content/steps';
import { PLANS_PRICE, ADDONS_PRICE, AddonsName } from '../../../content/price';
import Styles from './summary.module.css';

export interface SummaryProps {
  formData: FormData;
  goTo: (step: number) => void;
}

const Summary = ({ formData, goTo }: SummaryProps) => {
  const addOns = formData.addOns.selected.value;
  const { plan, period } = formData.selectPlan;
  const multiplier = period.value === 'yearly' ? 10 : 1;

  let totalAmount = PLANS_PRICE[plan.value] * multiplier;

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

  return (
    <div data-testid='summary'>
      <h2>Finishing Up</h2>
      <p className={Styles.subtext}>
        Double check everything before confirming
      </p>
      <div className={Styles.priceView}>
        <div className={`${Styles.valueRow} ${Styles.planPrice}`}>
          <div>
            <p>{`${plan?.value}(${period?.value})`}</p>
            <button
              className={Styles.changeBtn}
              onClick={() => goTo(STEPS.indexOf('Select Plan') + 1)}
            >
              Change
            </button>
          </div>
          <p>₹{PLANS_PRICE[plan.value] * multiplier}</p>
        </div>
        {!!addOns.length && (
          <div className={Styles.addonView}>{addOns.map(renderAddonPrice)}</div>
        )}
      </div>

      <div className={`${Styles.valueRow} ${Styles.totalView}`}>
        <p className={Styles.label}>{`Total(per ${period.value})`}</p>
        <p data-testid='total-amount' className={Styles.totalAmount}>
          ₹{totalAmount}
        </p>
      </div>
    </div>
  );
};

export default Summary;
