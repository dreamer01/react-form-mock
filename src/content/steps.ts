import React from 'react';

import Addon from '../components/FormSteps/AddOn/AddOn';
import PersonalInfo from '../components/FormSteps/PersonalInfo/PersonalInfo';
import SelectPlan from '../components/FormSteps/SelectPlan/SelectPlan';

export const STEPS = ['Your Info', 'Select Plan', 'Add Ons', 'Summary'];

type FormKeys = 'personalInfo' | 'selectPlan' | 'addOns';
export const FORM_STEPS: [FormKeys, React.ElementType][] = [
  ['personalInfo', PersonalInfo],
  ['selectPlan', SelectPlan],
  ['addOns', Addon],
];
