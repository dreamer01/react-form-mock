import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/test-utils';
import SelectPlan, { SelectPlanState } from './SelectPlan';

const value = {};
const onChange = vi.fn();

describe('render select plan step', () => {
  it('step heading and components', () => {
    render(<SelectPlan value={value as SelectPlanState} onChange={onChange} />);
    expect(screen.getByText('Select your plan')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toEqual(3);
  });

  it('select plan', async () => {
    render(<SelectPlan value={value as SelectPlanState} onChange={onChange} />);
    expect(screen.getByText('Select your plan')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toEqual(3);
    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(onChange).toBeCalled();
  });

  it('monthly and yearly selection', () => {
    render(
      <SelectPlan
        value={{ period: { value: 'yearly' } } as SelectPlanState}
        onChange={onChange}
      />
    );
    expect(screen.getAllByText('2 months free')[0]).toBeInTheDocument();
  });
});
