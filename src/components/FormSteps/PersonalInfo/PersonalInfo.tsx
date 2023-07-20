import { ChangeEvent, useState } from 'react';

import { FormStepProps } from '../index';
import Input from '../../Input/Input';
import Footer from '../../Footer/Footer';
import Styles from '../formStep.module.css';

type FormFieldsName = 'name' | 'email' | 'phone';

type FormField = {
  value: string;
  error: string;
};

export type PersonalInfoState = {
  [k in FormFieldsName]: FormField;
};

const TestPatterns: { [k: string]: RegExp } = {
  name: /[A-Za-z\s]+/,
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
  phone: /\+?\d{2}\s\d{10}/,
};

const PersonalInfo = ({ formData, setFormData, goto }: FormStepProps) => {
  const initPersonalInfo = (): PersonalInfoState => ({
    name: { value: formData.name, error: '' },
    email: { value: formData.email, error: '' },
    phone: { value: formData.phone, error: '' },
  });

  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoState>(initPersonalInfo);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let error: string = name && personalInfo[name as FormFieldsName]?.error;
    error = new RegExp(TestPatterns[name]).test(value)
      ? ''
      : `Please enter correct ${name} `;

    setPersonalInfo({
      ...personalInfo,
      ...{ [name]: { value, error } },
    });
  };

  const handleNext = () => {
    const { name, email, phone } = personalInfo;
    if (name.value && email.value && phone.value) {
      setFormData({
        ...formData,
        name: name.value,
        email: email.value,
        phone: phone.value,
      });
      goto((v) => v + 1);
    } else {
      setPersonalInfo({
        name: {
          value: name.value,
          error: name.value ? '' : 'Name is required.',
        },
        email: {
          value: email.value,
          error: email.value ? '' : 'Email is required.',
        },
        phone: {
          value: phone.value,
          error: phone.value ? '' : 'Phone is required.',
        },
      });
    }
  };

  // We can use props getter pattern for inputs, but I don't like it
  return (
    <section className={Styles.formView}>
      <form className={Styles.form}>
        <div data-testid='personal-info'>
          <h2>Personal Info</h2>
          <p className={Styles.subtext}>
            Please provide your name, email address and phone number
          </p>
          <div className={Styles.inputView}>
            <Input
              label='Name'
              error={personalInfo?.name?.error}
              required
              type='text'
              id='name'
              name='name'
              placeholder='e.g. Tony Stark'
              value={personalInfo?.name?.value}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputView}>
            <Input
              label='Email'
              error={personalInfo?.email?.error}
              required
              type='email'
              name='email'
              id='email'
              placeholder='e.g. ironbhai@stark.com'
              value={personalInfo?.email?.value}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputView}>
            <Input
              label='Phone'
              error={personalInfo?.phone?.error}
              required
              type='text'
              name='phone'
              id='phone'
              placeholder='e.g. +91 8888888888'
              value={personalInfo?.phone?.value}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <Footer position='first' handleNext={handleNext} />
    </section>
  );
};

export default PersonalInfo;
