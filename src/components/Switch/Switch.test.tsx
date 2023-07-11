import { describe, expect, it } from 'vitest';

import { render, screen, fireEvent } from '../../test/test-utils';
import Switch from './Switch';

describe('render switch component', () => {
  it('switch is rendered', () => {
    render(<Switch />);
    expect(screen.getByTestId('switch')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('switch'), {
      target: { checked: true },
    });
    expect(screen.getByTestId('switch')).toBeChecked();
  });
});
