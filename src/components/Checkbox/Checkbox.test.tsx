import { describe, expect, it } from 'vitest';

import { fireEvent, render, screen, userEvent } from '../../test/test-utils';
import Checkbox from './Checkbox';

describe('checkbox test suite', () => {
  it('render checkbox', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('checkbox onchange', () => {
    render(<Checkbox />);
    const checkBoxEle = screen.getByRole('checkbox');
    expect(checkBoxEle).toBeInTheDocument();
    fireEvent.change(checkBoxEle, { target: { checked: true } });
    expect(checkBoxEle).toBeChecked();
  });

  it('checkbox label click', async () => {
    render(
      <>
        <label htmlFor='test'>Test</label> <Checkbox id='test' />
      </>
    );
    const checkBoxEle = screen.getByRole('checkbox');
    const labelEle = screen.getByText('Test');
    expect(checkBoxEle).toBeInTheDocument();
    expect(labelEle).toBeInTheDocument();
    await userEvent.click(labelEle);
    expect(checkBoxEle).toBeChecked();
  });
});
