import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/test-utils';
import { mockFormData, mockGoto, mockSetFormData } from '../../../test/mock';
import { FormStepProps } from '../../FormSteps';
import PersonalInfo from './PersonalInfo';

const mockStepProps: FormStepProps = {
  formData: mockFormData,
  goto: mockGoto,
  setFormData: mockSetFormData,
};

describe('PersonalInfo Step', () => {
  beforeEach(() => {
    render(<PersonalInfo {...mockStepProps} />);
  });

  it('render heading', () => {
    expect(screen.getByTestId('personal-info')).toBeInTheDocument();
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
  });

  it('all 3 inputs are present', () => {
    expect(screen.getByTestId('personal-info')).toBeInTheDocument();
    expect(screen.getAllByTestId('input').length).toEqual(3);
  });
});
