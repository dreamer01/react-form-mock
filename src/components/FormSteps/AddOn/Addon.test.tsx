import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/test-utils';
import Addon, { AddOnState } from './AddOn';

const value = {};
const onChange = vi.fn();

describe('Addon Step', () => {
  it('render addon step', () => {
    render(<Addon value={value as AddOnState} onChange={onChange} />);
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
  });

  it('all options available', () => {
    render(<Addon value={value as AddOnState} onChange={onChange} />);
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length).toEqual(3);
  });

  it('addon selection', async () => {
    render(<Addon value={value as AddOnState} onChange={onChange} />);
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
    const labelEle = screen.getByTestId('online-label');
    await userEvent.click(labelEle);
    expect(onChange).toBeCalled();
    expect(screen.getByTestId('online-checkbox')).toBeChecked();
  });
});
