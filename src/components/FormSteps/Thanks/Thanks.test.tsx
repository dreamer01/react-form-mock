import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/test-utils';
import { mockFormData, mockGoto, mockSetFormData } from '../../../test/mock';
import { FormStepProps } from '../../FormSteps';
import Thanks from './Thanks';

const mockStepProps: FormStepProps = {
  formData: mockFormData,
  goto: mockGoto,
  setFormData: mockSetFormData,
};

describe('Summary component', () => {
  beforeEach(() => {
    render(<Thanks {...mockStepProps} />);
  });

  it('expect thank you title', () => {
    expect(screen.getByText('Thank You')).toBeInTheDocument();
  });

  it('expect thank you text with name', () => {
    expect(screen.getByText('Thank You')).toBeInTheDocument();
    expect(screen.getByText('Ajay')).toBeInTheDocument();
  });
});
