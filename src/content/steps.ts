import React from 'react';

import Addon from '../components/FormSteps/AddOn/AddOn';
import PersonalInfo from '../components/FormSteps/PersonalInfo/PersonalInfo';
import SelectPlan from '../components/FormSteps/SelectPlan/SelectPlan';

export const STEPS = ['Your Info', 'Select Plan', 'Add Ons', 'Summary'];

// Coupled with Business logic for now, refactor later
export const FORM_STEPS: [string, React.ElementType][] = [
  ['personalInfo', PersonalInfo],
  ['selectPlan', SelectPlan],
  ['addOns', Addon],
];
