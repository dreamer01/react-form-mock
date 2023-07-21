import { ReactElement, useState } from 'react';

import { STEPS } from './content/steps';
import { AddonsName, PlansName } from './content/price';
import Step from './components/Step/Step';

import Styles from './app.module.css';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: PlansName;
  period: 'yearly' | 'monthly';
  addOns: AddonsName[];
};

const initialState = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  period: 'monthly',
  addOns: [],
};

function App() {
  // Step value is starting from 1 and not the array index 0
  const [currentStep, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialState as FormData);

  const FormStepComponent = Object.values(STEPS)[currentStep - 1];

  const renderStep = (label: string, index: number): ReactElement => {
    return (
      <Step
        key={label}
        label={label}
        position={index + 1}
        active={currentStep === index + 1}
      />
    );
  };

  return (
    <div className={Styles.wrapper}>
      <main data-testid='step-form' className={Styles.main}>
        <section className={Styles.sidebar}>
          {Object.keys(STEPS).map(renderStep)}
        </section>

        <FormStepComponent
          goto={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      </main>
    </div>
  );
}

export default App;
