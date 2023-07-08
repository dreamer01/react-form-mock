import { describe, it, expect } from 'vitest';

import { render, screen } from '../../test/test-utils';
import Input from './Input';

describe('render input', () => {
  it('input with id and role', () => {
    render(<Input id='name' />);
    const inputEle = screen.getByTestId('input');
    expect(inputEle).toBeInTheDocument();
    expect(inputEle.id).contains('name');
  });
});
