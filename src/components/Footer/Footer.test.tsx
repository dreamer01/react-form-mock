import { describe, expect, it, vi } from 'vitest';

import { fireEvent, render, screen } from '../../test/test-utils';
import Footer, { FooterProps } from './Footer';

describe('Footer component', () => {
  const handleBackMock = vi.fn();
  const handleNextMock = vi.fn();

  const defaultProps: FooterProps = {
    handleBack: handleBackMock,
    handleNext: handleNextMock,
  };

  it('renders the Footer component with "Go Back" button when position is not "first"', () => {
    render(<Footer {...defaultProps} />);
    const backButton = screen.getByText('Go Back');
    expect(backButton).toBeInTheDocument();
  });

  it('renders the Footer component without "Go Back" button when position is "first"', () => {
    render(<Footer {...defaultProps} position='first' />);
    const backButton = screen.queryByText('Go Back');
    expect(backButton).toBeNull();
  });

  it('renders the Footer component with "Next Step" button when position is not "last"', () => {
    render(<Footer {...defaultProps} />);
    const nextButton = screen.getByText('Next Step');
    expect(nextButton).toBeInTheDocument();
  });

  it('renders the Footer component with "Confirm" button when position is "last"', () => {
    render(<Footer {...defaultProps} position='last' />);
    const confirmButton = screen.getByText('Confirm');
    expect(confirmButton).toBeInTheDocument();
  });

  it('calls the handleBack function when "Go Back" button is clicked', () => {
    render(<Footer {...defaultProps} />);
    const backButton = screen.getByText('Go Back');
    fireEvent.click(backButton);
    expect(handleBackMock).toHaveBeenCalledTimes(1);
  });

  it('calls the handleNext function when "Next Step" button is clicked', () => {
    render(<Footer {...defaultProps} />);
    const nextButton = screen.getByText('Next Step');
    fireEvent.click(nextButton);
    expect(handleNextMock).toHaveBeenCalledTimes(1);
  });

  it('calls the handleNext function when "Confirm" button is clicked', () => {
    render(<Footer {...defaultProps} position='last' />);
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(handleNextMock).toHaveBeenCalledTimes(2);
  });
});
