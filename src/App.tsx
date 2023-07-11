import { ReactElement, useState } from 'react';

import { STEPS, FORM_STEPS } from './content/steps';
import { PersonalInfoState } from './components/FormSteps/PersonalInfo/PersonalInfo';
import { SelectPlanState } from '@components/FormSteps/SelectPlan/SelectPlan';
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
};

type FormStates = PersonalInfoState;

function App() {
  const [currentStep, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<{
    [k: string]: FormStates | SelectPlanState;
  }>(initialState);

  const [formKey, FormStep] = FORM_STEPS[currentStep - 1];

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
    const currentStep = formData[formKey];
    const currentValues = Object.values(currentStep);
    const noError = currentValues.reduce((noError, { error }) => {
      return noError && !error;
    }, true);

    if (noError) {
      setStep((s) => s + 1);
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
            {
              <FormStep
                value={formData[formKey]}
                onChange={(infoObj: FormStates | SelectPlanState) =>
                  setFormData({ [formKey]: infoObj })
                }
              />
            }
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
