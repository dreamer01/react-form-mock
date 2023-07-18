import { ReactElement, useState } from 'react';

import { STEPS, FORM_STEPS } from './content/steps';
import { PersonalInfoState } from './components/FormSteps/PersonalInfo/PersonalInfo';
import { SelectPlanState } from './components/FormSteps/SelectPlan/SelectPlan';
import { AddOnState } from './components/FormSteps/AddOn/AddOn';
import Summary from './components/FormSteps/Summary/Summary';
import Step from './components/Step/Step';
import Button from './components/Button/Button';

import Styles from './app.module.css';

const initialState = {
  personalInfo: {
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    phone: { value: '', error: '' },
  },
  selectPlan: {
    plan: { value: 'arcade', error: '' },
    period: { value: 'monthly', error: '' },
  },
  addOns: {
    selected: { value: [], error: '' },
  },
};

export type FormStates = PersonalInfoState | SelectPlanState | AddOnState;
export type FormData = {
  personalInfo: PersonalInfoState;
  selectPlan: SelectPlanState;
  addOns: AddOnState;
};

function App() {
  // Step value is starting from 1 and not the array index 0
  const [currentStep, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialState as FormData);

  const [stepName, FormStepComponent] = FORM_STEPS[currentStep - 1] || [];

  const renderStep = (label: string, index: number): ReactElement => {
    return (
      <Step
        key={label}
        label={label}
        position={index + 1}
        active={currentStep === index + 1}
        onSelect={setStep}
      />
    );
  };

  const handleNext = () => {
    const currentStepData = formData[stepName];
    const allFields = Object.values(currentStepData);
    const noError = allFields.reduce(
      (acc, { error }) => !!(acc && !error),
      true
    ) as boolean;

    if (noError) {
      setStep((s) => s + 1);
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log('Done', formData);
  };

  return (
    <div className={Styles.wrapper}>
      <main data-testid='step-form' className={Styles.main}>
        <section className={Styles.sidebar}>{STEPS.map(renderStep)}</section>
        <section className={Styles.formView}>
          <form className={Styles.form}>
            {FormStepComponent ? (
              <FormStepComponent
                value={formData[stepName]}
                onChange={(stepData: FormStates) =>
                  setFormData({ ...formData, ...{ [stepName]: stepData } })
                }
              />
            ) : (
              <Summary formData={formData} goTo={setStep} />
            )}
          </form>
          <footer className={Styles.footer}>
            {currentStep > 1 ? (
              <Button
                onClick={() => {
                  setStep((s) => s - 1);
                }}
                kind='text'
                variant='secondary'
              >
                Go Back
              </Button>
            ) : (
              <p />
            )}

            {currentStep === STEPS.length ? (
              <Button type='submit' onClick={handleSubmit}>
                Confirm
              </Button>
            ) : (
              <Button onClick={handleNext} variant='secondary'>
                Next Step
              </Button>
            )}
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
