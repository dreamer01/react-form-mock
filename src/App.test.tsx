import { describe, it, expect } from 'vitest';

import { render, screen } from './test/test-utils';
import App from './App';

describe('App is rendering', () => {
  it('step form main is present', () => {
    render(<App />);
    expect(screen.getByTestId(/step-form/i)).toBeInTheDocument();
  });
});
