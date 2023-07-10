import { describe, it, expect } from 'vitest';

import { render, screen, userEvent } from '../../test/test-utils';
import Input from './Input';

describe('render input', () => {
  it('input with id and role', () => {
    render(<Input id='name' />);
    const inputEle = screen.getByTestId('input');
    expect(inputEle).toBeInTheDocument();
    expect(inputEle.id).contains('name');
  });

  it('render with label for id', async () => {
    render(<Input id='name' label='Name' />);
    const inputEle = screen.getByLabelText('Name');
    await userEvent.click(screen.getByText('Name'));
    expect(inputEle).toHaveFocus();
  });

  it('render error with correct class', () => {
    render(<Input id='name' error='Incorrect Name' />);
    const inputEle = screen.getByTestId('input');
    const errorText = screen.getByText('Incorrect Name');
    expect(inputEle).toBeInTheDocument();
    expect(inputEle.className).contains('error');
    expect(errorText).toBeInTheDocument();
    expect(errorText.className).contains('error');
  });
});
