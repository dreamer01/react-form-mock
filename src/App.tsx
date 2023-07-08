import { ReactElement, useState } from 'react';

import { STEPS } from './content/steps';
import Step from './components/Steps/Steps';
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

  return (
    <div className={Styles.wrapper}>
      <main className={Styles.main}>
        <section className={Styles.sidebar}>{STEPS.map(renderStep)}</section>
        <section className={Styles.formView}>
          <form className={Styles.form}>Form</form>
          <footer className={Styles.footer}>Footer</footer>
        </section>
      </main>
    </div>
  );
}

export default App;
