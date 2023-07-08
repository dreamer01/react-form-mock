import { describe, expect, it } from 'vitest';

import { screen, render, userEvent } from '../../test/test-utils';

import Step from './Step';

const onSelect = vi.fn();

describe('render step component', () => {
  it('render with num and string', () => {
    render(
      <Step position={1} onSelect={onSelect} label='Name' active={false} />
    );
    expect(screen.getAllByText(/1/)[0]).toBeInTheDocument();
    expect(screen.getByText(/Step/)).toBeInTheDocument();
  });

  it('onSelect is invoked with correct position', async () => {
    render(
      <Step position={1} onSelect={onSelect} label='Name' active={false} />
    );
    await userEvent.click(screen.getByTestId('step-component'));
    expect(onSelect).toBeCalled();
  });

  it('check for active css', () => {
    render(
      <Step position={3} onSelect={onSelect} label='Name' active={true} />
    );
    const counterEle = screen.getAllByText(/3/)[0];
    expect(counterEle).toBeInTheDocument();
    expect(counterEle.className).toContain('active');
  });
});
