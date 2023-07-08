import { ReactElement, useState } from 'react';

import { STEPS } from './content/steps';
import Step from './components/Step/Step';
import Button from './components/Button/Button';

import Styles from './app.module.css';

function App() {
  const [currentStep, setStep] = useState<number>(1);

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

  const handleSubmit = () => {};

  return (
    <div className={Styles.wrapper}>
      <main data-testid='step-form' className={Styles.main}>
        <section className={Styles.sidebar}>{STEPS.map(renderStep)}</section>
        <section className={Styles.formView}>
          <form className={Styles.form}>Form</form>
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
              <Button onClick={handleSubmit}>Confirm</Button>
            ) : (
              <Button
                onClick={() => {
                  setStep((s) => s + 1);
                }}
                variant='secondary'
              >
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
