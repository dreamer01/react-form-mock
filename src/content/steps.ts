import Thanks from '../components/FormSteps/Thanks/Thanks';
import Addon from '../components/FormSteps/AddOn/AddOn';
import PersonalInfo from '../components/FormSteps/PersonalInfo/PersonalInfo';
import SelectPlan from '../components/FormSteps/SelectPlan/SelectPlan';
import Summary from '../components/FormSteps/Summary/Summary';

export const STEPS = {
  'Your Info': PersonalInfo,
  'Select Plan': SelectPlan,
  'Add Ons': Addon,
  Summary: Summary,
  Thanks: Thanks,
};
