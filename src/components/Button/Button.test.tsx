import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../test/test-utils';
import Button from './Button';

const onClick = vi.fn();

describe('rendering button', () => {
  it('button with role and children', () => {
    render(<Button>Click Me</Button>);
    const btnEle = screen.getByRole('button');
    expect(btnEle).toBeInTheDocument();
    expect(btnEle).contains(/Click/);
  });

  it('button is clicked', async () => {
    render(<Button onClick={onClick}>Click Me</Button>);
    const btnEle = screen.getByRole('button');
    expect(btnEle).toBeInTheDocument();
    expect(btnEle).contains(/Click/);
    await userEvent.click(btnEle);
    expect(onClick).toHaveBeenCalled();
  });

  it('variant and kind is working', () => {
    render(
      <Button variant='secondary' kind='text'>
        Click Me
      </Button>
    );
    const btnEle = screen.getByRole('button');
    expect(btnEle.className).contains('secondary');
    expect(btnEle.className).contains('text');
  });
});
