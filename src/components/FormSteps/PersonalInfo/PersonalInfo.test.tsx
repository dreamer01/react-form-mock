import { describe, expect, it } from 'vitest';

import { screen, render } from '@test/test-utils';
import PersonalInfo from './PersonalInfo';

const value = {};
const onChange = vi.fn();

describe('render personal info step', () => {
  it('render heading', () => {
    render(<PersonalInfo value={value} onChange={onChange} />);
    expect(screen.getByTestId('personal-info')).toBeInTheDocument();
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
  });

  it('all 3 inputs are present', () => {
    render(<PersonalInfo value={value} onChange={onChange} />);
    expect(screen.getByTestId('personal-info')).toBeInTheDocument();
    expect(screen.getAllByTestId('input').length).toEqual(3);
  });
});
