import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/test-utils';
import { mockFormData, mockGoto, mockSetFormData } from '../../../test/mock';
import { FormStepProps } from '../../FormSteps';
import Addon from './AddOn';

const mockStepProps: FormStepProps = {
  formData: mockFormData,
  goto: mockGoto,
  setFormData: mockSetFormData,
};

describe('Addon Step', () => {
  beforeEach(() => {
    render(<Addon {...mockStepProps} />);
  });

  it('render addon step', () => {
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
  });

  it('all options available', () => {
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length).toEqual(3);
  });

  it('addon selection', async () => {
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
    const labelEle = screen.getByTestId('online-label');
    await userEvent.click(labelEle);
    expect(mockSetFormData).toBeCalled();
    expect(screen.getByTestId('online-checkbox')).toBeChecked();
  });
});
