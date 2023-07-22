import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/test-utils';
import { mockFormData, mockGoto, mockSetFormData } from '../../../test/mock';
import { FormStepProps } from '../../FormSteps';
import SelectPlan from './SelectPlan';

const mockStepProps: FormStepProps = {
  formData: mockFormData,
  goto: mockGoto,
  setFormData: mockSetFormData,
};

describe('render select plan step', () => {
  beforeEach(() => {
    render(<SelectPlan {...mockStepProps} />);
  });

  it('step heading and components', () => {
    expect(screen.getByText('Select your plan')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toEqual(3 + 2);
  });

  it('select plan', async () => {
    expect(screen.getAllByRole('button').length).toEqual(3 + 2);
    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(mockSetFormData).toBeCalled();
  });

  it('monthly and yearly selection', () => {
    render(
      <SelectPlan
        formData={{ ...mockFormData, period: 'yearly' }}
        goto={mockGoto}
        setFormData={mockSetFormData}
      />
    );
    expect(screen.getAllByText('2 months free')[0]).toBeInTheDocument();
  });
});
