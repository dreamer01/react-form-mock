import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/test-utils';
import { mockFormData, mockGoto, mockSetFormData } from '../../../test/mock';
import { FormStepProps } from '../../FormSteps';
import Summary from './Summary';

const mockStepProps: FormStepProps = {
  formData: mockFormData,
  goto: mockGoto,
  setFormData: mockSetFormData,
};

describe('Summary component', () => {
  beforeEach(() => {
    render(<Summary {...mockStepProps} />);
  });

  it('renders the summary component', () => {
    const summaryElement = screen.getByTestId('summary');
    expect(summaryElement).toBeInTheDocument();
  });

  it('displays the correct plan and price', () => {
    const planText = screen.getByText('arcade(yearly)');
    expect(planText).toBeInTheDocument();

    const priceText = screen.getAllByText('₹990');
    expect(priceText[0]).toBeInTheDocument();
  });

  it('goto called when change button is clicked', () => {
    const changeButton = screen.getByText('Change');
    changeButton.click();
    expect(mockGoto).toHaveBeenCalledWith(expect.any(Number));
  });

  it('total calculation', () => {
    expect(screen.getByTestId('total-amount').textContent).toEqual('₹1480');
  });
});
