import { ChangeEvent } from 'react';

import Input from '../../Input/Input';
import Styles from '../formStep.module.css';

type FormField = {
  value: string;
  error: string;
};

export type PersonalInfoState = {
  [k: string]: FormField;
};

interface PersonalInfoProps {
  value: PersonalInfoState;
  onChange: (info: PersonalInfoState) => void;
}

const TestPatterns: { [k: string]: RegExp } = {
  name: /[A-Za-z\s]+/,
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
  phone: /\+?\d{2}\s\d{10}/,
};

const PersonalInfo = ({ value: personalInfo, onChange }: PersonalInfoProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let error: string = name && personalInfo[name]?.error;
    error = new RegExp(TestPatterns[name]).test(value)
      ? ''
      : `Please enter correct ${name} `;

    onChange({
      ...personalInfo,
      ...{ [name]: { value, error } },
    });
  };

  // We can use props getter pattern for inputs, but I don't like it
  return (
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
  );
};

export default PersonalInfo;
