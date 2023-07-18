import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '../../../test/test-utils';
import { FormData } from '../../../App';
import Summary, { SummaryProps } from './Summary';

describe('Summary component', () => {
  const formData = {
    personalInfo: {
      name: { value: '', error: '' },
      email: { value: '', error: '' },
      phone: { value: '', error: '' },
    },
    selectPlan: {
      plan: { value: 'arcade', error: '' },
      period: { value: 'yearly', error: '' },
    },
    addOns: {
      selected: { value: ['online'], error: '' },
    },
  } as FormData;

  const goTo = vi.fn();

  const props: SummaryProps = {
    formData: formData,
    goTo,
  };

  beforeEach(() => {
    render(<Summary {...props} />);
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

  it('goTo called when change button is clicked', () => {
    const changeButton = screen.getByText('Change');
    changeButton.click();
    expect(goTo).toHaveBeenCalledWith(expect.any(Number));
  });

  it('total calculation', () => {
    expect(screen.getByTestId('total-amount').textContent).toEqual('₹1480');
  });
});
